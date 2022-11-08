import { SiYamahacorporation } from "react-icons/si";

export const ShortUserInfo = () => {
    return (
        <div className="header__user">
            <div className="header__user-container">
                {/* <Image /> */}
                <SiYamahacorporation className="logo__icon" />
                <div className="header__user-info">
                    <h2 className="header__user-name">Sławomir Dziurman</h2>
                    <h3 className="header__user-title">Pianista</h3>
                </div>
            </div>
        </div>
    );
};