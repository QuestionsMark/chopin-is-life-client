import { Logo } from "./Logo";
import { ShortUserInfo } from "./ShortUserInfo";
import { SignIn } from "./SignIn";

export const Header = () => {
    // const { user } = useUser();
    const user = true;

    return (
        <header className="header">
            <Logo />
            {user && <ShortUserInfo />}
            <SignIn />
        </header>
    );
};