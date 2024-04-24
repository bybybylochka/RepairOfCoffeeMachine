import React from "react";
import {NavLink} from "react-router-dom";

const DefectCard = ({card}) => {
    return (
        <NavLink to={'/defects/error'} className={'defect-card'}>
                <img className={'defects-card__image'} src={card.image} alt={'defect card'}/>
                <p className={'defect-card__name'}>{card.name}</p>
        </NavLink>
    )
}

export default DefectCard;