import React from "react";
import PossibleReason from "./PossibleReason";

const Defect = () => {
    const reasons = [
        {
            text: 'Загрезнение гидросистемы, медленная проходимость',
            cost: 'от 40 BYN'
        },
        {
            text: 'Загрезнение гидросистемы, медленная проходимость',
            cost: 'от 40 BYN'
        }
    ]
    return (
        <div className={'defect'}>
            <div className={'defect__wrapper wrapper'}>
                <h3 className={'defect__title'}>Делает слишком горячий кофе</h3>
                <p className={'defect__text'}>Температура кофе выставляется программно, а затем на выходе измеряется
                    термометром. У каждого напитка должна быть своя температура. Слишком горячий напиток будет если
                    система забита отложениями воды или кофе. Необходимо проведение процедур по обслуживанию, а затем
                    проверка работы датчиков температуры.</p>
                <button className={'button'}>Рассчитать стоимость</button>
                <h4 className={'defect__subtitle'}>Рекомендации или возможные причины поломки</h4>
                <div className={'defect__possible-reasons'}>
                    {reasons.map(reason => <PossibleReason reason={reason}/>)}
                </div>
            </div>
        </div>
    )
}

export default Defect;