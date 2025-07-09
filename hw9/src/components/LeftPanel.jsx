import '../LeftPanel.css';
import {useNavigate} from "react-router-dom";

export function LeftPanel({isChange, onToggle, h1Hide})
{
    const navigate = useNavigate();

    const btnClick = () =>
    {
        if(onToggle)
        {
            onToggle();
        }

        navigate(isChange ? '/login': '/register');
    };

    return (
        <div className='block-left-section'>
            <div className={`left-section ${isChange ? 'change': 'not-change'}`}>
                <button onClick={btnClick}><img src="./public/back.png" alt="img"/></button>
                <h1 className={h1Hide ? 'hide': ''}>ЗАПОВНІТЬ ВХІД ДО ОБЛИКОВОГО ЗАПИСУ</h1>
            </div>
        </div>
    );
}