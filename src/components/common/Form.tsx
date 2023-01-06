import { FormEvent, ReactNode } from "react";

interface Props {
    errors?: string[] | null;
    children: ReactNode;
    className?: string;
    handleSubmit: () => Promise<void>;
}

export const Form = ({ children, errors, handleSubmit, className }: Props) => {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (errors) return;
        handleSubmit();
    };

    return (
        <form className={`form${className ? ' ' + className : ''}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
};