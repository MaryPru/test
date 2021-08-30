import "../FirstBlock/FirstBlock.css";
import leadrium from "../../../assets/img/Leadrium.png";
import vector from "../../../assets/img/Vector.svg";

const FirstBlock = () => {
    return (
        <>
            <div className={"home-page-sub-title"}>
                Агенство digital-решений для бизнеса
            </div>
            <div className={"line"}/>
            <img src={leadrium} alt="leadrium" className={"text-logo"}/>
            <div className={"home-page-show-real-wrapper"}>
                <div className="show-real-button">
                    <div>НАШ шоурил</div>
                    <img src={vector} alt="vector"/>
                </div>
                <div className={'wrapper-show-real'} >
                    <iframe
                        width="100%"
                        height="518"
                        src="https://www.youtube.com/embed/IFBqJSPs5ek"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                </div>
            </div>
        </>
    );
};

export default FirstBlock;
