import "../SP/ServicesPage.css"
import mobile from "../../../assets/img/mobile.png"
import nout from "../../../assets/img/nout.png"
import pcomp from "../../../assets/img/pc.png"
import lamp from "../../../assets/img/lamp.png"
import loudspeaker from "../../../assets/img/loudspeaker.png"


const ServicesPage = () => {
    return (
        <div className="servicesPage">
            <div className="contentWrapper">
                <div className="servicesPageTitle">Услуги</div>
                <div className="cardsWrapper">
                    <div className="card">
                        <div className="cardDescriptionWrapper">
                            <div className="wrapperTitle">
                                <div className="title">Разработка мобильных приложений</div>
                                <img src={mobile} alt="mobile"/>
                            </div>

                            <div className="description">За 9 лет мы собрали внушительный опыт и экспертизу в
                                электронной коммерции, мобильной и веб-разработке, digital маркетинге. Но самое важное —
                                опыт совместного развития бизнеса с нашими клиентами. Благодаря этим знаниям и
                                стратегическому видению мы создаём бизнес-решения — продукты, которые органично
                                интегрируются в ваш бизнес и становятся его точкой развития.
                            </div>
                            <div className="direction">Разработка мобильных приложений на Android</div>
                            <div className="direction">Разработка мобильных приложений на IOS</div>
                            <div className="direction">РАЗРАБОТКА МОБИЛЬНЫХ ПРИЛОЖЕНИЙ ПОД IOS И ANDROID</div>
                            <div className="direction">РАЗРАБОТКА МОБИЛЬНЫХ ПРИЛОЖЕНИЙ И ИНТЕГРАЦИЯ С 1С ПРЕДПРИЯТИЕ
                            </div>
                        </div>

                    </div>
                    <div className="card">
                        <div className="cardDescriptionWrapper">
                            <div className="wrapperTitle">
                                <div className="title">РАЗРАБОТКА ИНТЕРНЕТ-МАГАЗИНА</div>
                                <img src={nout} alt="nout"/>
                            </div>
                            <div className="description">9 лет в электронной коммерции.

                                Мы создаём бизнес-решения с помощью инструментов консалтинга, мобильной и
                                web-разработки, digital-маркетинга.

                                Определяем цели проекта, подбираем инструментарий и собираем продукт с мощным движком.
                                Растём с клиентами и совершенствуем продукты вместе
                            </div>
                            <div className="direction">ИНТЕРНЕТ-МАГАЗИНЫ НА MAGENTO 2.3</div>
                            <div className="direction">ПЕРЕХОД НА MAGENTO 2.3</div>
                            <div className="direction">МАРКЕТПЛЕЙСЫ</div>
                            <div className="direction">B2B РЕШЕНИЯ</div>
                            <div className="direction">МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ</div>
                            <div className="direction">DIGITAL MARKETING</div>
                            <div className="direction">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</div>
                        </div>

                    </div>
                    <div className="card">
                        <div className="cardDescriptionWrapper">
                            <div className="wrapperTitle">
                                <div className="title">РАЗРАБОТКА ВЕБ САЙТОВ</div>
                                <img src={pcomp} alt="pcomp"/>
                            </div>
                            <div className="description">Бизнес знает свои потребности, а мы — как их реализовать.

                                Строим устойчивые корпоративные сайты и резвые промо-лендинги. Разрабатываем web
                                сервисы. Наши продукты выдерживают огромную нагрузку и надёжно служат клиентам.
                            </div>
                            <div className="direction">СОЗДАНИЕ КОРПОРАТИВНОГО САЙТА</div>
                            <div className="direction">ПРОМО-САЙТЫ</div>
                            <div className="direction">WEB СЕРВИСЫ</div>
                            <div className="direction">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</div>
                        </div>

                    </div>
                    <div className="card">
                        <div className="cardDescriptionWrapper">
                            <div className="wrapperTitle">
                                <div className="title">СОЗДАНИЕ СТАРТАПА</div>
                                <img src={lamp} alt="lamp"/>
                            </div>
                            <div className="description">Воплощаем птицу идеи в действующий бизнес. Анализируем
                                концепции стартапов. Подвергаем сомнению и находим свет — выбираем то, во что искренне
                                верим. Консультируем и прокачиваем бизнес-модель продукта. Задаём маршрут, учим летать и
                                выпускаем в небо.
                            </div>
                            <div className="direction">БИЗНЕС КОНЦЕПТ</div>
                            <div className="direction">ДЕМОВЕРСИЯ</div>
                            <div className="direction">MVP</div>
                            <div className="direction">ПОЛНОФУНКЦИОНАЛЬНЫЙ</div>
                        </div>

                    </div>
                    <div className="card">
                        <div className="cardDescriptionWrapper">
                            <div className="wrapperTitle">
                                <div className="title">DIGITAL МАРКЕТИНГ</div>
                                <img src={loudspeaker} alt="loupeaker"/>
                            </div>
                            <div className="description">Помогаем растущему бизнесу расти быстрее, а взрослому —
                                достойно принимать вызовы времени.

                                Проводим тщательный анализ и создаём коммуникационную стратегию. Детально прорабатываем
                                воронку. Оптимизируем каналы продвижения и запускаем рекламные кампании. Шлифуем имидж
                                бренда через осмысленный контент.
                            </div>
                            <div className="direction">DIGITAL РЕКЛАМА</div>
                            <div className="direction">АУДИТ И ОПТИМИЗАЦИЯ DIGITAL КАНАЛОВ</div>
                            <div className="direction">WEB АНАЛИТИКА</div>
                            <div className="direction">СОЗДАНИЕ РЕКЛАМНОГО КОНТЕНТА</div>
                            <div className="direction">РАЗРАБОТКА СТРАТЕГИИ МЕДИАКОММУНИКАЦИЙ</div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default ServicesPage;