import { KeyboardPart } from "./KeyboardPart";
import { KeyboardPartBtn } from "./KeyboardPartBtn";

export const SubmitKeyboard = () => {
    return (
        <div className="login__keyboard">
            <KeyboardPart />
            <KeyboardPartBtn />
            <KeyboardPart />
        </div>
    );
};