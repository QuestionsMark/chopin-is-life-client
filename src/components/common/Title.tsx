import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Title = ({ children }: Props) => <h1 className="title">{children}</h1>;