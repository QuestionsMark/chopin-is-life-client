import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface Props {
    value: string;
    handleChange: (value: string) => void;
    className?: string;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
}

export const PasswordInput = ({ value, handleChange, className, maxLength, minLength, placeholder }: Props) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="form__password">
            <input
                type={visible ? "text" : "password"}
                className={`form__inp form__inp-password${className ? ' ' + className : ''}`}
                maxLength={maxLength}
                minLength={minLength}
                placeholder={placeholder ? placeholder : 'password'}
                value={value}
                onChange={e => handleChange(e.target.value)}
            />
            {visible ? <AiFillEye className="form__password-icon" onClick={() =>setVisible(false)}/> : <AiFillEyeInvisible className="form__password-icon" onClick={() =>setVisible(true)}/>}
        </div>
    );
};