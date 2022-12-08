import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Collection, SearchResultEntity } from "../../../types";

interface Props {
    activeIndex: number;
    collection: Collection;
    index: number;
    item: SearchResultEntity;
    handleValueChange: (value: string) => void;
    setActiveIndex: Dispatch<SetStateAction<number>>;
}

export const SearchResultItem = ({ activeIndex, collection, index, item, setActiveIndex, handleValueChange }: Props) => {
    const { id, name } = item;

    const navigate = useNavigate();

    const handleClick = () => {
        handleValueChange('');
        navigate(`/${collection}/${id}/${name || ''}`);
    };

    return (
        <li className={`search__item${activeIndex === index ? ' active' : ''}`} onClick={handleClick} onMouseEnter={() => setActiveIndex(index)}>{item.name}</li>
    );
};