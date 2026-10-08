import Header from "../../components/Header/Header"
import { useState } from "react";
import "./Login.css"
import { loginApi } from '../../api/auth-service';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from "react-router";
import backgroundTexture from "../../assets/background-texture.png";

//o código tá bem poluido e grande, mas se tudo der certo isso é meio que uma
//base pra quando a gente tiver uma api no nestjs (SE tudo der certo)
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { token } = await loginApi({ email, password });
            login(token);
            alert("Success!"); //Yuipee
        } catch (err) { // err awkward
            alert("Login failed");
        }
    };
    return (
        <>
            <section className="splitsection">
                <section className="mainsection">
                    <Header />
                    <div className="login-area">
                        <div className="login-box">
                            <h1>LOGIN</h1>
                            <form className="form-login" onSubmit={handleSubmit}>
                                <label htmlFor="email">Nome ou e-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Insira o seu e-mail/nome..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="password">Senha</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Insira a sua senha..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="submit">Entrar</button>
                            </form>

                            <div className="login-redirects">
                                <NavLink to="/cadastro">Não tem uma conta?</NavLink>
                                <NavLink to="/suporte">Esqueceu a sua senha?</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="boardsection">
                    <div className="alert-board">
                        <h1 id="alert-title"> Alertas </h1>
                        <ul className="alert-list">
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}