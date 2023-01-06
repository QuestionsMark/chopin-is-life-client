import { Difficulty as DifficultyInterface } from "../../types";

interface Props {
    value: DifficultyInterface;
    handleChange: (range: DifficultyInterface) => void;
}

export const Difficulty = ({ handleChange, value }: Props) => {
    return (
        <div className="difficulty">
            {/* <input type="range" className="difficulty__inp" min={0} max={4} step={1} value={value} onChange={handleChange} /> */}
        </div>
    );
};