import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { Form } from "../../components/common/Form";
import { Paragraph } from "../../components/common/Paragraph";
import { Checkbox } from "../../components/form-elements/Checkbox";
import { EmailInput } from "../../components/form-elements/EmailInput";
import { Label } from "../../components/form-elements/Label";
import { PasswordInput } from "../../components/form-elements/PasswordInput";
import { TextInput } from "../../components/form-elements/TextInput";
import { RegisterForm } from "../../types";
import { SoundBox } from "../login/SoundBox";
import { Keyboard } from "../login/Keyboard";
import { Main } from "../../components/layout/Main";
import { ContentWrapper } from "../../components/layout/ContentWrapper";

const defaultFormState: RegisterForm = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordRepeat: '',
    rulesAccepted: false,
    // yearsOfPlayingPiano: 0,
};

export const Register = () => {
    const [
        { email, firstName, lastName, password, passwordRepeat, rulesAccepted },
        setFromState
    ] = useState<RegisterForm>(defaultFormState);

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
                        <EmailInput handleChange={v => setFromState(state => ({ ...state, email: v }))} value={email} />
                        <PasswordInput handleChange={v => setFromState(state => ({ ...state, password: v }))} value={password} />
                        <PasswordInput
                            handleChange={v => setFromState(state => ({ ...state, passwordRepeat: v }))}
                            value={passwordRepeat}
                            placeholder="repeat password"
                        />
                        <TextInput
                            handleChange={v => setFromState(state => ({ ...state, firstName: v }))}
                            value={firstName}
                            placeholder="first name"
                        />
                        <TextInput
                            handleChange={v => setFromState(state => ({ ...state, lastName: v }))}
                            value={lastName}
                            placeholder="last name"
                        />
                        <Label
                            value={<p>I accept the <Link to="/rules" target="_blank" className="link login__link strong">regulations</Link> and agree to follow the rules of the platform.</p>}
                            onClick={() => setFromState(state => ({ ...state, rulesAccepted: !state.rulesAccepted }))}
                            className="login__label"
                        >
                            <Checkbox checked={rulesAccepted} />
                        </Label>
                        <Button>Register</Button>
                    </Form>
                    <Keyboard />
                    <Paragraph indent={false} className="login__paragraph">
                        Do you have an account? <Link to="/login" className="link login__link">Login here!</Link>
                    </Paragraph>
                </div>
            </Main>
        </ContentWrapper>
    );
};