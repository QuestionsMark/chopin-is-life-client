import { Image } from "./image";

export enum Collection {
    Creation = 'creation',
    Performance = 'performance',
    User = 'user',
}

export interface SearchResultEntity {
    id: string;
    name: string;
    info?: string;
    img?: Image;
}