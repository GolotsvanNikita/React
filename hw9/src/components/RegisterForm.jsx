import '../RegisterForm.css';
import {useEffect, useState} from "react";


export function RegisterForm()
{
    const [formData, setFormData] = useState
    ({
        name: '',
        lastName: '',
        country: '',
        address: '',
        phone: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState
    ({
        name: false,
        lastName: false,
        country: false,
        address: false,
        phone: false,
        email: false,
        password: false
    });

    const regex =
    {
        name: /^[А-ЯІЇЄҐа-яіїєґ'-]{2,}$/,
        lastName: /^[А-ЯІЇЄҐа-яіїєґ'-]{2,}$/,
        country: /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s-]{2,}$/,
        address: /^.{5,}$/,
        phone: /^\+380\d{9}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^[A-Za-z\d]{6,}$/
    };

    useEffect(() =>
    {
        const savedData = localStorage.getItem('authData');
        if (savedData)
        {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const inputChange = (e) =>
    {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value})

        if (!regex[name].test(value))
        {
            setErrors({...errors, [name]: true})
        }
        else
        {
            setErrors({...errors, [name]: false})
        }
    };

    const onSubmit = (e) =>
    {
        e.preventDefault();
        const isValid = !errors.phone && !errors.email &&
            !errors.password && formData.phone
            && formData.email && formData.password;
        if (isValid)
        {
            const authData =
            {
                phone: formData.phone,
                email: formData.email,
                password: formData.password
            };
            localStorage.setItem('authData', JSON.stringify(authData));
            alert('Registration correct');
        }
        else
        {
            alert('Incorrect data');
        }
    };

    const isFormValid = !Object.values(errors).some(error => error) &&
        formData.phone && formData.email && formData.password;

    return(
        <div className='registerForm'>
            <form>
                <div className='Name'>
                    <label>
                        <p>Ім'я</p>
                        <div className="inputRow">
                            <input type="text" name="name" value={formData.name} onChange={inputChange} />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                    </label>
                </div>
                <div className='lastName'>
                    <label>
                        <p>Фамілія</p>
                        <div className="inputRow">
                            <input type="text" name='lastName' value={formData.lastName} onChange={inputChange}/>
                            {errors.lastName && <span className='error'>Incorrect value</span>}
                        </div>
                    </label>
                </div>
                <div className='birth'>
                    <label>
                        <p>Дата народження</p>
                        <input type="date" required={true}/>
                    </label>
                </div>
                <div className='country'>
                    <label>
                        <p>Країна</p>
                        <div className="inputRow">
                            <input type="text" name='country' value={formData.country} onChange={inputChange}/>
                            {errors.country && <span className='error'>Incorrect value</span>}
                        </div>
                    </label>
                </div>
                <div className='address'>
                    <label>
                        <p>Адреса</p>
                        <div className="inputRow">
                            <input type="text" name='address' value={formData.address} onChange={inputChange}/>
                            {errors.address && <span className='error'>Incorrect value</span>}
                        </div>
                    </label>
                </div>
                <div className='phone'>
                    <label>
                        <p>Мобільний номер</p>
                        <div className="inputRow">
                            <input type="text" name='phone' value={formData.phone} onChange={inputChange}/>
                            {errors.phone && <span className='error'>Incorrect value</span>}
                        </div>
                    </label>
                    <p className='pInfo'>By entering your mobile number and one-time code sign-in option, you agree to receive a one-time
                        verification code via SMS from IKEA. Message and data rates may apply.</p>
                    <a href="#">More info about Privacy Policy</a>
                </div>
                <div className='email'>
                    <label>
                        <p>Електронна пошта</p>
                        <div className="inputRow">
                            <input type="email" name='email' value={formData.email} onChange={inputChange}/>
                            {errors.email && <span className='error'>Incorrect value</span>}
                        </div>
                    </label>
                    <p className='verifInfo'>Вам потрібно буде пройти верифікацію</p>
                </div>
                <div className='password'>
                    <label>
                        <p>Пароль</p>
                        <div className="inputRow">
                            <input type="password" name='password' value={formData.password} onChange={inputChange}/>
                            {errors.password && <span className='error'>Incorrect value</span>}
                        </div>
                    </label>
                </div>
                <div className="info">
                    <label className="checkbox">
                        <input type="checkbox" id="save" />
                        <span className="checkmark"></span>
                        <span className="label-text">Я, ознайомлений з Політикою конфіденційності з обробки та захисту персональних даних</span>
                    </label>
                </div>
                <button className='continue' onClick={onSubmit} disabled={!isFormValid}>
                    продовжити
                </button>
            </form>
        </div>
    );
}
