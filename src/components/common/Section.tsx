import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    center?: boolean;
    className?: string;
    flex?: boolean;
    title?: string;
    titleClassName?: string;
}

export const Section = ({ children, center, className, title, titleClassName, flex }: Props) => {
    return (
        <section className={`section${flex ? ' section--flex' : ''}${center ? ' section--center' : ''}${className ? ' ' + className : ''}`}>
            {title && <h2 className={`section__title${titleClassName ? ' ' + titleClassName : ''}`}>{title}</h2>}
            {children}
        </section>
    );
};