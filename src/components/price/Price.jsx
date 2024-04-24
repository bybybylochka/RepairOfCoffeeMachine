import React from "react";
import PriceTable from "./PriceTable";

const Price = () => {
    const data = [
        {
            name: 'Очистка от накипи (декальцинация)',
            cost: 'от 40 BYN'
        },
        {
            name: 'Очистка от кофейных масел',
            cost: 'от 30 BYN'
        },
        {
            name: 'Диагностика',
            cost: 'Бесплатно'
        }
    ]
    return (
        <div className={'price'}>
            <div className={'price__wrapper wrapper'}>
                <h3 className={'price__title'}>Цены на ремонт кофемашин</h3>
                <p className={'price__text'}>Ознакомьтесь с прайс-листом на ремонт и обслуживание кофемашин. Вы можете
                    узнать цены на конкретные работы или на комплексный ремонт неисправности.</p>
                <div className={'price__tables'}>
                    <PriceTable data={data} headName={'Цены на услуги'}/>
                    <PriceTable data={data} headName={'Цены на поломки'}/>
                </div>
            </div>
        </div>
    )
}

export default Price;