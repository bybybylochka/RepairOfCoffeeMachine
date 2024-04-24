import React from 'react';
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header__wrapper wrapper'}>
                <Logo/>
                <Navigation/>
            </div>
        </div>
    )
}

export default Header;