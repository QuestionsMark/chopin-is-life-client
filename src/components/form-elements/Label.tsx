import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    title?: string;
    titleClassName?: string;
    value?: ReactNode;
    onClick?: () => void;
}

export const Label = ({ children, value, className, title, titleClassName, onClick }: Props) => {
    return (
        <label className={`form__label${className ? ' ' + className : ''}`} onClick={onClick}>
            {title && <h3 className={`form__title${titleClassName ? ' ' + titleClassName : ''}`}>{title}</h3>}
            {children}
            {value}
        </label>
    );
};