import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    withAside?: boolean;
}

export const ContentWrapper = ({ children, className, withAside }: Props) => {
    return (
        <div className={`wrapper${className ? ' ' + className : ''}${withAside ? ' wrapper--row' : ''}`}>
            {children}
        </div>
    );
};