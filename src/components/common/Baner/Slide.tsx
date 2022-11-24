import { Slide as SlideInterface } from "../../../types";
import { Image } from "../Image";

import { HOST_ADDRESS } from "../../../config/config";

interface Props {
    slide: SlideInterface;
    isActive: boolean;
    isStatic?: boolean;
}

export const Slide = ({ isActive, slide, isStatic }: Props) => {
    const { alt, src } = slide;

    return (
        <div
            className={`baner__slide${isActive ? ' baner__slide-active' : ''}`}
            style={{ backgroundImage: `url('${isStatic ? src : `${HOST_ADDRESS}/file/${src}`}')` }}
        >
            <div className="baner__curtain" />
            <Image alt={alt} src={src} className="baner__img" isStatic={isStatic} />
        </div>
    );
};