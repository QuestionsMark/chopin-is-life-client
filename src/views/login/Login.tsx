import { useState } from "react";
import { Form } from "../../components/common/Form";
import { Checkbox } from "../../components/form-elements/Checkbox";
import { EmailInput } from "../../components/form-elements/EmailInput";
import { Label } from "../../components/form-elements/Label";
import { PasswordInput } from "../../components/form-elements/PasswordInput";
import { SoundBox } from "./SoundBox";
import { SubmitKeyboard } from "./SubmitKeyboard";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = async () => {
        console.log('Wysyłam...');
    };

    return (
        <main className="main login">
            <div className="login__wrapper">
                <SoundBox />
                <Form
                    errors={null}
                    handleSubmit={handleSubmit}
                    className="login__form"
                >
                    <EmailInput handleChange={v => setEmail(v)} value={email} />
                    <PasswordInput handleChange={v => setPassword(v)} value={password} />
                    <Label value="Remember me." onClick={() => setRemember(state => !state)}>
                        <Checkbox checked={remember} />
                    </Label>
                    <SubmitKeyboard />
                </Form>
            </div>
        </main>
    );
};