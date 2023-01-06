import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../components/common/Form";
import { Paragraph } from "../../components/common/Paragraph";
import { Checkbox } from "../../components/form-elements/Checkbox";
import { EmailInput } from "../../components/form-elements/EmailInput";
import { Label } from "../../components/form-elements/Label";
import { PasswordInput } from "../../components/form-elements/PasswordInput";
import { SoundBox } from "./SoundBox";
import { Keyboard } from "./Keyboard";
import { Button } from "../../components/common/Button";
import { Main } from "../../components/layout/Main";
import { ContentWrapper } from "../../components/layout/ContentWrapper";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = async () => {
        console.log('Wysyłam...');
    };

    return (
        <ContentWrapper>
            <Main className="login">
                <div className="login__wrapper">
                    <SoundBox />
                    <Form
                        errors={null}
                        handleSubmit={handleSubmit}
                        className="login__form"
                        >
                        <EmailInput handleChange={v => setEmail(v)} value={email} />
                        <PasswordInput handleChange={v => setPassword(v)} value={password} />
                        <Label
                            value="Remember me."
                            onClick={() => setRemember(state => !state)}
                            className="login__label"
                        >
                            <Checkbox checked={remember} />
                        </Label>
                        <Button>Login</Button>
                    </Form>
                    <Keyboard />
                    <Paragraph indent={false} className="login__paragraph">
                        If u don't have an account yet, <Link to="/signup" className="link login__link">sign up here!</Link>
                    </Paragraph>
                </div>
            </Main>
        </ContentWrapper>
    );
};