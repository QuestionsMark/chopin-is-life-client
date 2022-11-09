import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    value?: ReactNode;
    className?: string;
    title?: string;
    titleClassName?: string;
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