import React from "react";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return(
        <div className={'logo'}>
            <NavLink to={'/'}>
                <h1>CoffeeRemont24</h1>
            </NavLink>
        </div>
    )
}

export default Logo;