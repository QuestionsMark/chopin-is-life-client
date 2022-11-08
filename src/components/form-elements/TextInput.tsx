interface Props {
    value: string;
    handleChange: (value: string) => void;
    className?: string;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
}

export const TextInput = ({ value, handleChange, className, maxLength, minLength, placeholder }: Props) => {
    return (
        <input
            type="text"
            className={`form__inp${className ? ' ' + className : ''}`}
            maxLength={maxLength}
            minLength={minLength}
            placeholder={placeholder}
            value={value}
            onChange={e => handleChange(e.target.value)}
        />
    );
};