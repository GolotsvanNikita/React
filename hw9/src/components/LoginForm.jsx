import '../LoginForm.css';
import '../LeftPanel.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

export function LoginForm({ onToggle })
{
    const [isShow, setIsShow] = useState(false);
    const [loginData, setLoginData] = useState({ emailOrPhone: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const changeShow = (e) =>
    {
        e.preventDefault();
        setIsShow(!isShow);
    };

    useEffect(() =>
    {
        const savedAuthData = localStorage.getItem('authData');
        if (savedAuthData)
        {
            const authData = JSON.parse(savedAuthData);
            setLoginData(prev => ({ ...prev, emailOrPhone: authData.email || authData.phone }));
        }
    }, []);

    const onSubmit = (e) =>
    {
        e.preventDefault();
        const savedAuthData = localStorage.getItem('authData');
        if (savedAuthData)
        {
            const authData = JSON.parse(savedAuthData);
            if ((loginData.emailOrPhone === authData.email || loginData.emailOrPhone === authData.phone) && loginData.password === authData.password)
            {
                setLoginError('');
                alert('Login successful');
                navigate('/');
            }
            else
            {
                setLoginError('Invalid login or password.');
            }
        }
        else
        {
            setLoginError('Please register');
        }
    };

    const InputChange = (e) =>
    {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    return (
        <div className='loginForm'>
            <form>
                <div className='emailOrPhone'>
                    <label>
                        <p>Електронна пошта або мобільний номер</p>
                        <input type="text" name="emailOrPhone" value={loginData.emailOrPhone} onChange={InputChange} />
                    </label>
                    {loginError && <p className='pInfo' style={{ color: 'red' }}>{loginError}</p>}
                    <p className='pInfo'>By entering your mobile number and one-time code sign-in option, you agree to receive a one-time
                        verification code via SMS from IKEA. Message and data rates may apply.</p>
                    <a href="#">More info about Privacy Policy</a>
                </div>
                <div className='password'>
                    <label>
                        <p>Пароль</p>
                        <div className='input-pass-wrapper'>
                            <input type={isShow ? 'text' : 'password'} name="password" value={loginData.password} onChange={InputChange} />
                            <button onClick={changeShow}>
                                <img src={`./public/${isShow ? 'unshow' : 'show'}.png`} alt="img" />
                            </button>
                        </div>
                    </label>
                    <a href="#">Забули свій пароль?</a>
                    <div className="info">
                        <label className="checkbox">
                            <input type="checkbox" id="save" />
                            <span className="checkmark"></span>
                            <span className="label-text">Зберегти інформацію</span>
                        </label>
                        <button className="info-btn" onClick={(e) => { e.preventDefault(); }}>
                            <img src="./public/info.png" alt="img" />
                        </button>
                    </div>
                </div>
                <button className='continue' onClick={onSubmit}>
                    продовжити
                </button>
                <div className='createAcc'>
                    <p>У вас ще немає облікового запису? Створіть його:</p>
                    <button onClick={(e) =>
                    {
                        e.preventDefault();
                        if (onToggle) {
                            onToggle();
                        }
                    }}><Link to="/register">створити аккаунт</Link></button>
                </div>
            </form>
        </div>
    );
}
