import { useState } from 'react';
import { Slide as SlideInterface } from "../../../types";
import { Dot } from './Dot';
import { Slide } from './Slide';

interface Props {
    slides: SlideInterface[];
    isStatic?: boolean;
}

export const Baner = ({ slides, isStatic }: Props) => {
    const [index, setIndex] = useState(0);
    //
    if (slides.length < 1) return null;
    //

    const { alt, src, text, title } = slides[index];

    const slidesList = () => {
        return slides.map((s, i) => <Slide key={String(i)} slide={s} isActive={i === index} isStatic={isStatic} />);
    };

    const dotsList = () => {
        return slides.map((s, i) => <Dot key={String(i)} index={i} isActive={index === i} setIndex={setIndex} />);
    };

    return (
        <div className="baner">
            {/* <Image alt={alt} src={src} className="baner__img" /> */}
            <div className="baner__container">
                {slidesList()}
            </div>
            {(text || title) && 
            <div className="baner__description">
                {title && <h3 className="baner__description-title">{title}</h3>}
                {text && <p className="baner__description-text">{text}</p>}
            </div>}
            <div className="baner__dashboard">{dotsList()}</div>
        </div>
    );
};