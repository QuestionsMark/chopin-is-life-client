import { Routes, Route } from 'react-router-dom';
import { Home } from '../../views/home/Home';
import { Login } from "../../views/login/Login";

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
        </Routes>
    );
};