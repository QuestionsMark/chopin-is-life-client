import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

export const FilterSection = ({ children, className }: Props) => {
    return (
        <div className={`filter__section${className ? ' ' + className : ''}`}>
            {children}
        </div>
    );
};