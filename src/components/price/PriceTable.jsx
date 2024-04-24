import React from "react";

const PriceTable = ({ data, headName }) => {
    return (
        <table className={'price-table'}>
            <thead className={'price-table__head'}>
            <tr>
                <th colSpan="3">{headName}</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.cost}</td>
                    <td><button className={'button'}>Рассчитать стоимость</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default PriceTable;