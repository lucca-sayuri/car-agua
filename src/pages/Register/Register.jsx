import { NavLink } from "react-router";
import Header from "../../components/Header/Header";
import './Register.css'

export default function Register() {
    return (
        <>
            <Header />

            <div className="register-box">
                <h1>CADASTRO</h1>
                <form className="form-register">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Insira o seu nome ..."/>

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" placeholder="Insira o seu e-mail ..."/>

                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" placeholder="Insira a sua senha ..."/>
                    <input type="password" name="password-confirm" placeholder="Confirme sua senha ..."/>

                    <button type="submit">Cadastrar</button>

                    <div className="register-redirects">
                        <NavLink to="/login">Já tem uma conta?</NavLink>
                    </div>
                </form>
            </div>
        </>
    );
}
