import React from "react";
import error from '../../assets/cards/error.png'
import hot from '../../assets/cards/hot.png'
import water from '../../assets/cards/water.png'
import cup from '../../assets/cards/cup.png'
import DefectCard from "./DefectCard";
import {Route, Routes} from "react-router-dom";
import Defect from "./Defect";

const Defects = () => {
    const cards = [
        {
            image: error,
            name: 'Выдает ошибку'
        },
        {
            image: hot,
            name: 'Делает слишком горячий кофе'
        },
        {
            image: water,
            name: 'Жидкость в контейнере для отходов'
        },
        {
            image: cup,
            name: 'Кофе не крепкий'
        },
        {
            image: error,
            name: 'Выдает ошибку'
        },
        {
            image: hot,
            name: 'Делает слишком горячий кофе'
        },
        {
            image: water,
            name: 'Жидкость в контейнере для отходов'
        },
        {
            image: cup,
            name: 'Кофе не крепкий'
        },
    ]
    return (
        <div className={'defects'}>
            <div className={'defects__wrapper wrapper'}>
                <h3 className={'defects__title'}>Неисправности</h3>
                <p className={'defects__text'}>Даже самая качественная и дорогая кофемашина когда-нибудь ломается и у ее
                    владельца возникает потребность быстро и качественно провести диагносику неисправности и ремонт. Вот
                    самые распространенные поломки, возможные причины и способы их устранения:</p>
                <div className={'defects__cards'}>
                    {cards.map(card => <DefectCard card={card}/>)}
                </div>
            </div>
        </div>
    )
}

export default Defects;