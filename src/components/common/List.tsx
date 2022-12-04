import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

export const List = ({ children, className }: Props) => {
    return (
        <ul className={`list${className ? ' ' + className : ''}`}>
            {children}
        </ul>
    );
};