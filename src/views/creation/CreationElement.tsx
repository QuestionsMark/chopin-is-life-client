import { Link } from "react-router-dom";
import { Creation } from "../../types";

import { BsMusicNoteList } from 'react-icons/bs';

interface Props {
    creation: Creation;
}

export const CreationElement = ({ creation }: Props) => {
    const { id, name, number, opus, sheetMusic } = creation;

    return (
        <Link to={`/creation/${id}`} className="creation__link">
            <li className="creation__item">
                <BsMusicNoteList className="creation__item-icon" />
                <div className="creation__item-content">
                    <h3 className="creation__item-title">{name}</h3>
                    <div className="creation__item-information">
                        <p className="creation__item-info">Op. <span>{opus}</span></p>
                        <p className="creation__item-info">No. <span>{number}</span></p>
                        <p className="creation__item-info">Sheets: <span>{sheetMusic}</span></p>
                    </div>
                </div>
            </li>
        </Link>
    );
};