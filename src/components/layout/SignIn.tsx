import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

export const SignIn = () => {
    //
    const [user, setUser] = useState(false);
    //
    const navigate = useNavigate();

    const handleLogin = () => {
        setUser(true);
        navigate('/login');
    };

    const handleLogout = () => {
        setUser(false);
        navigate('/');
    };

    return (
        <div className="header__signin">
            {user ? <FiLogOut className="header__signin-icon" onClick={handleLogout} /> : <FiLogIn className="header__signin-icon" onClick={handleLogin} />}
        </div>
    );
};