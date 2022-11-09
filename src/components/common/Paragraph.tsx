import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    end?: boolean;
    indent?: boolean;
}

export const Paragraph = ({ children, className, end, indent = true }: Props) => {
    return (
        <p className={`paragraph${indent ? ' paragraph--indent' : ''}${end ? ' paragraph--end' : ''}${className ? ' ' + className : ''}`}>
            {children}
        </p>
    );
};