import React from "react";

const CostCalculation = ( ) => {
    return (
        <div className={'cost-calculation'}>
            <div className={'cost-calculation__wrapper wrapper'}>
                <h3 className={'cost-calculation__title'}>Расчет стоимости ремонта</h3>
                <form className={'cost-calculation__form'}>
                    <div className={'form-column'}>
                        <label id={'producer'}>Введите проивзодителя:</label>
                        <select  id={'producer'} name={'producer'}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>

                        <label id={'model'}>Введите марку:</label>
                        <select  id={'model'} name={'model'}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className={'form-column'}>
                        <label id={'service'}>Выберите услугу:</label>
                        <select  id={'service'} name={'service'}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>

                        <label id={'defect'}>Выберите неисправность:</label>
                        <select id={'defect'} name={'defect'}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <button className={'button'}>Рассчитать</button>
                </form>
            </div>
        </div>
    )
}

export default CostCalculation;