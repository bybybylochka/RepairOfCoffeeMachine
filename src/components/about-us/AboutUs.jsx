import React from "react";

const AboutUs = () => {
    return (
        <div className={'about-us'}>
            <div className={'about-us__wrapper wrapper'}>
                <h3 className={'about-us__title'}>О нас</h3>
                <p className={'about-us__text'}>Наша компания работает более 5 лет, за это время мы наработали опыт по ремонту даже самых сложных неисправностей. Мы каждый день ремонтируем кофемашины разных брендов: Delonghi, Jura, Saeco, Philips, Bosch, WMF, Shaerer, Franke, Simonelli, Smeg, Bork, Gaggia, Melitta, Miele, Nivona, Krups и даем на это гарантию 6 месяцев. У нас в штате 5 мастеров, которые выполняют плановые обслуживания и ремонты в офисах города Москвы и МО. Сеть кофеен, которая угощает Вас кофе каждый день, наша работа.</p>
                <h4 className={'about-us__subtitle'}>Какие работы мы выполняем:</h4>
                <ul className={'about-us__list'}>
                    <li>диагностика кофемашин и выявление неисправного компонента</li>
                    <li>ремонт кофемашин всех марок: замена неисправных узлов, с использованием оригинальных компонентов</li>
                    <li>ремонт капсульных и рожковых кофемашин</li>
                    <li>ремонт электрики с привлечение высококвалифицированных специалистов</li>
                    <li>сложные ремонты, от которых другие отказываются</li>
                </ul>
            </div>
        </div>
    )
}
export default AboutUs;