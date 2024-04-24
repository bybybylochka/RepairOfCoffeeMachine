import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={'navigation'}>
            <NavLink to={'/about-us'}>О нас</NavLink>
            <NavLink to={'/repair-tracking'}>Отслеживание ремонта</NavLink>
            <NavLink to={'/cost-calculation'}>Расчет стоимости</NavLink>
            <NavLink to={'/price'}>Цены</NavLink>
            <NavLink to={'/defects'}>Неисправности</NavLink>
        </nav>
    )
}

export default Navigation;