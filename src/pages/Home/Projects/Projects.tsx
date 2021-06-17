import "../Projects/Projects.css"
import pr1 from "../../../assets/img/pr1.png"
import vector from "../../../assets/img/Vector.svg"

const Projects = () => {
    return (
        <div className="Projects">
            <div className="contentWrapper">
                <div className="ProjectsTitle">
                    Избранные проекты
                </div>
                <div className="ProjectsCards ">
                    <div className="ProjectCard">
                        <img src={pr1} alt="preview" />
                        <div className="title">Название проекта</div>
                        <div className="subTitle">Описание</div>
                    </div>
                    <div className="ProjectCard">
                        <img src={pr1} alt="preview" />
                        <div className="title">Название проекта</div>
                        <div className="subTitle">Описание</div>
                    </div>
                    <div className="ProjectCard">
                        <img src={pr1} alt="preview" />
                        <div className="title">Название проекта</div>
                        <div className="subTitle">Описание</div>
                    </div>
                    <div className="ProjectCard">
                        <img src={pr1} alt="preview" />
                        <div className="title">Название проекта</div>
                        <div className="subTitle">Описание</div>
                    </div>
                </div>
                <div className="ProjectsSubTitle">
                    <div className="text">Все проекты</div>
                    <img src={vector} alt="vector" />
                </div>
            </div>
        </div>

    );
}

export default Projects;