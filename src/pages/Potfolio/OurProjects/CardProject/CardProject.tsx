import preview from "../../../../assets/img/pr1.png";
import vector from "../../../../assets/img/Vector.svg";

interface CardProjectProps {
    title: string
    oven: boolean
    subTitle: string
    link: string
    path: string
}

const CardProject = (props: CardProjectProps) => {

    const {title, subTitle, link, path, oven} = props;

    return (
        <div className="cardProject">
            {oven && <img src={preview} alt="preview"/>}
            <div className="wrapperDescription">
                <div className="title">{title}</div>
                <div className="subTitle">{subTitle}</div>
                <div className="linkWrapper">
                    <div className="link">{link}</div>
                    <img src={vector} alt="vector"/>
                </div>
                <div className="path">{path}</div>
            </div>
            {!oven && <img src={preview} alt="preview"/>}
        </div>
    );
};

export default CardProject;
