import "../OurProjects/OurProjects.css"
import CardProject from "./CardProject/CardProject"

const OurProjects = () => {

    const OurProjectsData = [
        {
            title: "Название проекта в две строки",
            subTitle: "Описание проекта. Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию.",
            link: "Посмотреть кейс",
            path: "Дизайн / iOS разработка / Android разработка / Поддержка"
        },
        {
            title: "Название проекта в две строки",
            subTitle: "Описание проекта. Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию.",
            link: "Посмотреть кейс",
            path: "Дизайн / iOS разработка / Android разработка / Поддержка"
        },
        {
            title: "Название проекта в две строки",
            subTitle: "Описание проекта. Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию.",
            link: "Посмотреть кейс",
            path: "Дизайн / iOS разработка / Android разработка / Поддержка"
        },
        {
            title: "Название проекта в две строки",
            subTitle: "Описание проекта. Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию.",
            link: "Посмотреть кейс",
            path: "Дизайн / iOS разработка / Android разработка / Поддержка"
        },
    ]

    const even = (n: number) => !(n % 2);

    return (
        <div className="ourProjects">
            <div className="contentWrapper">
                <div className="ourProjectTitle">
                    ПОртфолио
                </div>
                <div className="cardsWrapper">
                    {OurProjectsData.map((project, index) =>
                        <CardProject
                            key={`${project.title}-${index}`}
                            oven={even(index)}
                            title={project.title}
                            subTitle={project.subTitle}
                            link={project.link}
                            path={project.path}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default OurProjects;
