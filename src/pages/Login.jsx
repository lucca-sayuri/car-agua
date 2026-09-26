import Header from "../components/Header/Header"
import { useState } from "react";
import "./Login.css"
import { loginApi } from '../api/auth-service';
import { useAuth } from '../context/AuthContext';
import backgroundTexture from "../assets/background-texture.png";
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
        } catch (err) {
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
                                <label> Nome ou e-mail:
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                </label>
                                <label> Senha:<input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </label>
                                <button type="submit">Enter</button>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="boardsection">
                    <div className="alert-board">
                        <h1 id="alert-title"> Alertas </h1>
                        <ul className="alert-list">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}