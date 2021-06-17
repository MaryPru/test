import "./Services.css"
import vector from "../../../assets/img/Vector.svg"

const Services = () => {
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
                            <div className="ServicesDirection">
                                <div className="name">Разработка мобильных приложений</div>
                                <img src={vector} alt="vector" />
                            </div>
                            <div className="ServicesDirection">
                                <div className="name">Разработка Интернет-магазина</div>
                                <img src={vector} alt="vector" />
                            </div>
                            <div className="ServicesDirection">
                                <div className="name">Разработка Веб-сайтов</div>
                                <img src={vector} alt="vector" />
                            </div>
                            <div className="ServicesDirection">
                                <div className="name">Создание стартапа</div>
                                <img src={vector} alt="vector" />
                            </div>
                            <div className="ServicesDirection">
                                <div className="name">Digital маркетинг</div>
                                <img src={vector} alt="vector" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Services;