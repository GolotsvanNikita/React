import './LoginForm.css';
import {useState} from "react";

export function LoginForm(props)
{
    const [login, setLogin] = useState(props.login);
    const [password, setPassword] = useState(props.password);

    return (
        <div className="login-container">
            <h2>Login Form</h2>

            <form>
                <label>
                    Login:
                    <input
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </form>

            <div className="output">
                <h3>Data:</h3>
                <p><strong>Login:</strong> {login}</p>
                <p><strong>Password:</strong> {password}</p>
            </div>
        </div>
    );
}
