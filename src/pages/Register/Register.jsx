import { NavLink } from 'react-router'
import { useState } from 'react'
import { registerUser } from '../../api/auth-service'
import './Register.css'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()

        setMessage('')
        setErrorMessage('')

        if (password !== passwordConfirm) {
            setErrorMessage('As duas senhas não são iguais')
            return
        }

        if (password.length < 8) {
            setErrorMessage('A senha tem que ter pelo menos 8 caracteres.')
            return
        }

        setLoading(true)

        try {
            const data = await registerUser(email, password, name)

            if (data.session) {
                setMessage('Cadastro realizado com sucesso.')
            } else {
                setMessage(
                    'Cadastro realizado. Confirme sua conta no email.'
                )
            }

            setName('')
            setEmail('')
            setPassword('')
            setPasswordConfirm('')
        } catch (error) {
            setErrorMessage(error.message || 'Não foi possível realizar o cadastro.')

        } finally {
            setLoading(false)
        }
    }

    return (
        <>

            <div className="register-box">
                <h1>CADASTRO</h1>

                <form className="form-register" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" name="name" placeholder="Insira o seu nome" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" required />

                    <label htmlFor="register-email">E-mail</label>
                    <input id="register-email" type="email" name="email" placeholder="Insira o seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required />

                    <label htmlFor="register-password">Senha</label>
                    <input id="register-password" type="password" name="password" placeholder="Insira a sua senha" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="new-password" minLength={8} required />

                    <label htmlFor="password-confirm">Confirme sua senha</label>
                    <input id="password-confirm" type="password" name="password-confirm" placeholder="Confirme sua senha" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} autoComplete="new-password" minLength={8} required
                    />

                    {errorMessage && <p role="alert">{errorMessage}</p>}
                    {message && <p role="status">{message}</p>}

                    <button type="submit" disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>

                    <div className="register-redirects">
                        <NavLink to="/login">Já tem uma conta?</NavLink>
                    </div>
                </form>
            </div>
        </>
    )
}