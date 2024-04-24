import React from "react";
import error from '../../assets/cards/error.png';

const PossibleReason = ({reason}) => {
    return (
        <div className={'possible-reason'}>
            <img className={'possible-reason__image'} src={error} alt={'possible reason image'}/>
            <div className={'possible-reason__content'}>
                <p className={'possible-reason__text'}>{reason.text}</p>
                <p className={'possible-reason__cost'}>{reason.cost}</p>
            </div>
        </div>
    )
}

export default PossibleReason;