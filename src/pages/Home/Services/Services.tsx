import "./Services.css"
import vector from "../../../assets/img/Vector.svg"
import ServicesDirection from "./ServicesDirection/ServicesDirection";
import Strategy from "../../ServicesPage/ServicesPage/StrategyItem/Strategy/Strategy";

const Services = () => {

    const data = ['Разработка мобильных приложений', 'Разработка Интернет-магазина', 'Разработка Веб-сайтов', 'Создание стартапа', 'Digital маркетинг']

    return (
        <>
            <div className="Services">
                <div className="contentWrapper">
                    <div className="ServicesTitle">
                        Услуги
                    </div>
                    <div className="ServicesDescription">За 9 лет мы собрали внушительный опыт и экспертизу в электронной коммерции, мобильной и веб-разработке, digital маркетинге. Но самое важное — опыт совместного развития бизнеса с нашими клиентами. Благодаря этим знаниям и стратегическому видению мы создаём бизнес-решения — продукты, которые органично интегрируются в ваш бизнес и становятся его точкой развития.
                    </div>
                    <div className="ServicesDirectionsWrapper">
                        <div className="ServicesDirections">
                            {data.map((name) => (
                                <ServicesDirection
                                    key={`${name}`}
                                    name={name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
