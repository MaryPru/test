import pr1 from "../../../../assets/img/pr1.png";

const ProjectItem =()=> {
    return (
        <div className="ProjectCard">
            <img src={pr1} alt="preview" />
            <div className="title">Название проекта</div>
            <div className="subTitle">а 9 лет мы собрали внушительный опыт и экспертизу в электронной коммерции, мобильной и веб-разработке, digital маркетинге.</div>
        </div>
    )
}

export default ProjectItem
