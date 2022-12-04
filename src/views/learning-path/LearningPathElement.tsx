import { LearningPath as LearningPathInterface } from "../../types";

import { BsTrophyFill } from 'react-icons/bs';

interface Props {
    learningPath: LearningPathInterface;
}

export const LearningPathElement = ({ learningPath }: Props) => {
    const { title } = learningPath;

    return (
        <li className="learning-path__item">
            <div className="learning-path__item-content">
                <BsTrophyFill className="learning-path__item-icon" />
                <div className="learning-path__item-stripe" />
                <div className="learning-path__item-stripe" />
                <h3 className="learning-path__item-title">{title}</h3>
            </div>
        </li>
    );
};