import "../OurProjects/OurProjects.css"
import preview from "../../../assets/img/pr1.png"
import vector from "../../../assets/img/Vector.svg"



const OurProjects = () => {
    return (
        <div className="ourProjects">
            <div className="contentWrapper">
                <div className="ourProjectTitle">
                    ПОртфолио
                </div>
                <div className="cardsWrapper">

                    <div className="card">

                        <div className="WrapperDescripton">
                            <div className="title">Название проекта
                                в две строки</div>
                            <div className="subTitle">Описание проекта. Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию.</div>
                            <div className="linkWrapper">
                                <div className="link">Посмотреть кейс</div>
                                <img src={vector} alt="vector" />
                            </div>
                            <div className="path">Дизайн / iOS разработка / Android разработка / поддержка</div>
                        </div>
                        <img src={preview} alt="preview" />
                    </div> 
                
                    <div className="card">
                        <img src={preview} alt="preview" />
                        <div className="WrapperDescripton">
                            <div className="title">Название проекта
                                в две строки</div>
                            <div className="subTitle">Описание проекта. Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию.</div>
                            <div className="linkWrapper">
                                <div className="link">Посмотреть кейс</div>
                                <img src={vector} alt="vector" />
                            </div>
                            <div className="path">Дизайн / iOS разработка / Android разработка / поддержка</div>
                        </div>

                    </div>
                    <div className="card">

                        <div className="WrapperDescripton">
                            <div className="title">Название проекта
                                в две строки</div>
                            <div className="subTitle">Описание проекта. Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию.</div>
                            <div className="linkWrapper">
                                <div className="link">Посмотреть кейс</div>
                                <img src={vector} alt="vector" />
                            </div>
                            <div className="path">Дизайн / iOS разработка / Android разработка / поддержка</div>
                        </div>
                        <img src={preview} alt="preview" />
                    </div>
                    <div className="card">
                        <img src={preview} alt="preview" />
                        <div className="WrapperDescripton">
                            <div className="title">Название проекта
                                в две строки</div>
                            <div className="subTitle">Описание проекта. Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию.</div>
                            <div className="linkWrapper">
                                <div className="link">Посмотреть кейс</div>
                                <img src={vector} alt="vector" />
                            </div>
                            <div className="path">Дизайн / iOS разработка / Android разработка / поддержка</div>
                        </div> 

                    </div>
                
                </div>

            </div>
         
        </div>


    );
}

export default OurProjects;