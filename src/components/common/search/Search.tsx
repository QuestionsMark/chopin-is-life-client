import { KeyboardEvent, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Collection } from "../../../types";

import { useSearch } from "../../../hooks/useSearch";
import { List } from "../List";

import { SearchResultItem } from "./SearchResultItem";

interface Props {
    collection: Collection;
    center?: boolean;
    className?: string;
    placeholder?: string;
}

export const Search = ({ collection, center, className, placeholder }: Props) => {

    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const { amount, close, data, error, handleValueChange, isOpen, loading, open, value } = useSearch(collection);

    const handleNavigate = (e: KeyboardEvent<HTMLFormElement>) => {
        if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.code)) {
            e.preventDefault();
            if (data.length === 0) return;
            if (e.code === 'ArrowUp') {
                setActiveIndex(state => state > 0 ? state - 1 : 0);
            } else if (e.code === 'ArrowDown') {
                setActiveIndex(state => state === data.length - 1 ? state : state + 1);
            } else {
                close();
                handleValueChange('');
                navigate(`/${collection}/${data[activeIndex].id}/${data[activeIndex].name || ''}`);
            }
        }
    };

    const handleRightClick = (e: MouseEvent) => {
        if (!e.shiftKey) return;
        e.preventDefault();
        open();
    };

    const dataList = () => {
        return data.map((item, i) => (
            <SearchResultItem
                key={item.id}
                activeIndex={activeIndex}
                collection={collection}
                index={i}
                item={item}
                handleValueChange={handleValueChange}
                setActiveIndex={setActiveIndex}
            />
        ));
    };

    return (
        <form className={`search${className ? ' ' + className : ''}${center ? ' search--center' : ''}`} onKeyDown={handleNavigate}>
            <input
                type="text"
                className="search__inp"
                value={value}
                placeholder={placeholder}
                onChange={e => handleValueChange(e.target.value)}
                onContextMenu={e => handleRightClick(e)}
                onBlur={close}
            />
            <div className={`search__results${isOpen ? ' active' : ''}`}>
                {!loading && data.length > 0 &&
                <List className="search__list">
                    {dataList()}
                </List>}
                {!loading && !error && data.length === 0 && <p className="search__info">Brak wyników.</p>}
                {loading && <p className="search__info">Loading...</p>}
                {error && <p className="search__info search__info--error">{error}</p>}
                {/* Jak jest za dużo wyników to pisze "+5 wyników" */}
            </div>
        </form>
    );
};