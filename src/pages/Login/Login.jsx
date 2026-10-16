import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { useAuth } from '../../context/AuthContext'
import './Login.css'
import backgroundTexture from '../../assets/background-texture.png'

export default function Login() {
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        setErrorMessage('')
        setLoading(true)

        try {
            await login(email, password)
            navigate('/')
        } catch (error) {
            setErrorMessage(
                error.message || 'Não foi possível entrar na sua conta.'
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <>

            <div className="login-box">
                <h1>LOGIN</h1>

                <form className="form-login" onSubmit={handleSubmit}>

                    <label htmlFor="login-email">E-mail</label>
                    <input id="login-email" type="email" placeholder="Insira o seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} utoComplete="email" required />

                    <label htmlFor="login-password">Senha</label>
                    <input id="login-password" type="password" name="password" placeholder="Insira a sua senha..." value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />

                    {errorMessage && <p role="alert">{errorMessage}</p>}

                    <button type="submit" disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>

                </form>

                <div className="login-redirects">
                    <NavLink to="/cadastro">Não tem uma conta?</NavLink>
                    <NavLink to="/suporte">Esqueceu a sua senha?</NavLink>
                </div>
            </div>
        </>
    )
}