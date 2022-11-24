import { Dispatch, SetStateAction } from 'react';

interface Props {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
    isActive: boolean;
}

export const Dot = ({ index, isActive, setIndex }: Props) => {
    return <div className={`baner__dashboard-dot${isActive ? ' baner__dashboard-dot--active' : ''}`} onClick={() => setIndex(index)} />;
};