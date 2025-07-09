import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LeftPanel } from "./components/LeftPanel.jsx";
import { LoginForm } from "./components/LoginForm.jsx";
import { RegisterForm } from "./components/RegisterForm.jsx";

function App()
{
    const [isChange, setIsChange] = useState(false);
    const [h1Hide, setH1Hide] = useState(false);

    useEffect(() =>
    {
        const savedState = localStorage.getItem('isChange');
        if (savedState !== null) {
            setIsChange(JSON.parse(savedState));
        }
    }, []);

    useEffect(() =>
    {
        localStorage.setItem('isChange', JSON.stringify(isChange));
    }, [isChange]);

    const toggle = () =>
    {
        setH1Hide(!h1Hide);
        setIsChange(!isChange);
    };

    return (
        <Router>
            <LeftPanel isChange={isChange} onToggle={toggle} h1Hide={h1Hide} />
            <Routes>
                <Route path='/' element={<Navigate to={isChange ? '/register' : '/login'} />} />
                <Route path='/login' element={<LoginForm onToggle={toggle} h1Hide={h1Hide} isChange={isChange} />} />
                <Route path='/register' element={<RegisterForm />} />
            </Routes>
        </Router>
    );
}

export default App;