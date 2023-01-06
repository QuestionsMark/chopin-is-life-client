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
import { LoginForm } from "../../types";
import { checkValidation, LoginSchema } from "../../utils/validation.util";

export const Login = () => {
    const [form, setForm] = useState<LoginForm>({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleSubmit = async () => {
        const errors = checkValidation(form, LoginSchema);
        if (!errors) {
            console.log('Wysyłam...');
        }
    };

    return (
        <ContentWrapper>
            <Main className="login">
                <div className="login__wrapper">
                    <SoundBox />
                    <Form
                        handleSubmit={handleSubmit}
                        className="login__form"
                        >
                        <EmailInput handleChange={v => setForm(state => ({ ...state, email: v }))} value={form.email} />
                        <PasswordInput handleChange={v => setForm(state => ({ ...state, password: v }))} value={form.password} />
                        <Label
                            value="Remember me."
                            onClick={() => setForm(state => ({ ...state, rememberMe: !state.rememberMe }))}
                            className="login__label"
                        >
                            <Checkbox checked={form.rememberMe} />
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