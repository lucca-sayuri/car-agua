import { createContext, useState, useContext, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        supabase.auth.getSession().then(({ data, error }) => {
            if (error) {
                console.error('Erro ao recuperar a sessão:', error.message)
            }

            setSession(data?.session ?? null)
            setLoading(false)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, newSession) => {
            setSession(newSession)
            setLoading(false)
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    const login = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) throw error

        return data
    }

    const logout = async () => {
        const { error } = await supabase.auth.signOut()

        if (error) throw error
    }

    const user = session?.user ?? null
    const isAuthenticated = Boolean(user)

    return (
        <AuthContext.Provider
            value={{ user, session, isAuthenticated, loading, login, logout, }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider')
    }

    return context
}