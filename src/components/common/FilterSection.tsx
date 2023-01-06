import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    title?: string;
}

export const FilterSection = ({ children, className, title }: Props) => {
    return (
        <div className={`filter__section${className ? ' ' + className : ''}`}>
            {title && <h3 className="filter__section-title">{title}</h3>}
            {children}
        </div>
    );
};