import { Routes, Route } from 'react-router-dom';
import { ChopinCompetition } from '../../views/chopin-competition/ChopinCompetition';
import { Creation } from '../../views/creation/Creation';
import { Help } from '../../views/help/Help';
import { Home } from '../../views/home/Home';
import { LearningPath } from '../../views/learning-path/LearningPath';
import { Login } from "../../views/login/Login";
import { NotFound } from '../../views/not-found/NotFound';
import { Performance } from '../../views/performance/Performance';
import { Profile } from '../../views/profile/Profile';
import { Register } from '../../views/register/Register';
import { Rules } from '../../views/rules/Rules';

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/help" element={<Help />} />
            <Route path="/creation" element={<Creation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chopin-competition" element={<ChopinCompetition />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/learning-path" element={<LearningPath />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};