import './FormComponent.css';
import {useState} from "react";

export function FormComponent()
{
    const [formState, setFormState] = useState(
    {
        userId: '',
        password: '',
        name: '',
        address: '',
        country: '',
        zipCode: '',
        email: '',
        sex: null,
        languages: [],
        about: ''
    });

    const [validate, setValidate] = useState(
    {
        userId: false,
        password: false,
        name: false,
        address: false,
        country: false,
        zipCode: false,
        email: false,
        sex: false,
    });

    const correctCheck = (name, value) =>
    {
        if (name === 'userId')
        {
            const userIdCheck = /^\d{5,7}$/.test(value);
            setFormState({...formState, userId: value});
            setValidate({...validate, userId: userIdCheck});
        }
        else if (name === 'password')
        {
            const passwordCheck = /^[a-zA-Z\d]{7,12}$/.test(value);
            setFormState({...formState, password: value});
            setValidate({...validate, password: passwordCheck});
        }
        else if (name === 'name')
        {
            const nameCheck = /^[A-Za-z]+$/.test(value);
            setFormState({...formState, name: value});
            setValidate({...validate, name: nameCheck});
        }
        else if (name === 'address')
        {
            const addressCheck = /^[A-Za-z\d, ]+$/.test(value);
            setFormState({...formState, address: value});
            setValidate({...validate, address: addressCheck});
        }
        else if(name === 'country')
        {
            const validCountries = ['usa', 'ukraine', 'germany'];
            const countryCheck = validCountries.includes(value);

            setFormState({...formState, country: value});
            setValidate({...validate, country: countryCheck});
            console.log(countryCheck);
        }
        else if(name === 'zip')
        {
            const zipCheck = /^\d+$/.test(value);
            setFormState({...formState, zipCode: value});
            setValidate({...validate, zipCode: zipCheck});
        }
        else if(name === 'email')
        {
            const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            setFormState({...formState, email: value});
            setValidate({...validate, email: emailCheck});
        }
        else if(name === 'sex')
        {
            const sexCheck = value === 'male' || value === 'female';
            setFormState({...formState, sex: value});
            setValidate({...validate, sex: sexCheck});
        }
        else if(name === 'language')
        {
            if (!formState.languages.includes('english'))
            {
                setFormState({...formState, languages: value});
            }
            else if (!formState.languages.includes('non-english'))
            {
                setFormState({...formState, languages: value});
            }
        }
        else
        {
            setFormState({...formState, [name]: value});
        }
    };

    const submitTarget = (e) =>
    {
        e.preventDefault();

        const isFormValid = Object.values(validate).every(v => v === true);

        if (!isFormValid)
        {
            alert('Form is incorrect')
        }
        else
        {
            console.log('Data: ', formState)
        }
    };

    return(
        <div className='main'>
            <form className='mainForm' onSubmit={submitTarget}>
                <label>
                    User id :
                    <input
                        type="text"
                        name="userId"
                        value={formState.userId}
                        onChange={(e) => correctCheck(e.target.name, e.target.value)}
                        className={validate.userId ? 'correct': 'error'}
                        required={true}
                    />
                </label>

                <label>
                    Password :
                    <input
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={(e) => correctCheck(e.target.name, e.target.value)}
                        className={validate.password ? 'correct': 'error'}
                        required={true}
                    />
                </label>

                <label>
                    Name :
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={(e) => correctCheck(e.target.name, e.target.value)}
                        className={validate.name ? 'correct': 'error'}
                        required={true}
                    />
                </label>

                <label>
                    Address :
                    <input
                        type="text"
                        name="address"
                        value={formState.address}
                        onChange={(e) => correctCheck(e.target.name, e.target.value)}
                        className={validate.address ? 'correct': 'error'}
                        required={true}
                    />
                </label>

                <label>
                    Country :
                    <select name="country"
                            value={formState.country}
                            onChange={(e) => correctCheck(e.target.name, e.target.value)}
                            className={validate.country ? 'correct': 'error'}
                            required={true}
                    >
                        <option value=''>Please select a country</option>
                        <option value="usa">USA</option>
                        <option value="ukraine">Ukraine</option>
                        <option value="germany">Germany</option>
                    </select>
                </label>

                <label>
                    ZIP Code :
                    <input
                        type="text"
                        name="zip"
                        value={formState.zipCode}
                        onChange={(e) => correctCheck(e.target.name, e.target.value)}
                        className={validate.zipCode ? 'correct': 'error'}
                        required={true}
                    />
                </label>

                <label>
                    Email :
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={(e) => correctCheck(e.target.name, e.target.value)}
                        className={validate.email ? 'correct': 'error'}
                        required={true}
                    />
                </label>

                <label>
                    Sex :
                    <div>
                        <input
                            type="radio"
                            name="sex"
                            value="male"
                            checked={formState.sex === 'male'}
                            onChange={(e) => correctCheck(e.target.name, e.target.value)}
                        />
                        <label htmlFor='male'>Male</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="sex"
                            value="female"
                            checked={formState.sex === 'female'}
                            onChange={(e) => correctCheck(e.target.name, e.target.value)}
                        />
                        <label htmlFor='female'>Female</label>
                    </div>
                </label>

                <label>
                    Language [Optional] :
                    <div>
                        <input
                            type="checkbox"
                            name="language"
                            value="english"
                            onChange={(e) => correctCheck(e.target.name, e.target.value)}
                        />
                        <label htmlFor='english'>English</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="language"
                            value="non-english"
                        />
                        <label htmlFor='non-english'>Non English</label>
                    </div>
                </label>

                <label>
                    About [Optional] :
                    <textarea
                        name="about"
                        rows="4"
                        cols="40"
                        value={formState.about}
                        onChange={(e) => correctCheck(e.target.name, e.target.value)}
                    >
                    </textarea>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}