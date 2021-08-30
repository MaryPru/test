import "../Projects/Projects.css";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
import ProjectItem from "./ProjectsItem/ProjectsItem";

const Projects = () => {
    const ProjectData = [
        1, 2, 3, 4,
    ];

    return (
        <div className="Projects">
            <div className="contentWrapper">
                <div className="ProjectsTitle">
                    Избранные проекты
                </div>
                <div className="ProjectsCards ">
                    {ProjectData.map((el) => <ProjectItem key={`ProjectItem=${el}`}/>)}
                </div>
                <div className="ProjectsSubTitle">
                    <div className="text">Все проекты</div>
                    <ArrowIcon/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
