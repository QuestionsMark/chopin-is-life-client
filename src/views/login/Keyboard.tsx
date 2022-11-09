import { KeyboardPart } from "./KeyboardPart";

export const Keyboard = () => {
    return (
        <div className="login__keyboard">
            <div className="login__keyboard-container">
                <KeyboardPart />
                <KeyboardPart />
                <KeyboardPart />
            </div>
        </div>
    );
};