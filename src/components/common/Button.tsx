import { MouseEvent, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    handler?: () => void;
    type?: "submit" | "button" | "reset";
}

export const Button = ({ children, className, disabled, handler, type = "submit" }: Props) => {
    const handleClick = (e: MouseEvent) => {
        if (e.currentTarget.getAttribute("type") === "submit") return;
        e.preventDefault();
        if (typeof handler === "function") {
            handler();
        }
    };

    return (
        <button
            className={`btn${className ? ' ' + className : ''}`}
            onClick={handleClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};