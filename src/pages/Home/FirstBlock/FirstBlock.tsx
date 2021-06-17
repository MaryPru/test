import "../FirstBlock/FirstBlock.css"
import leadrium from "../../../assets/img/Leadrium.png"
import vector from "../../../assets/img/Vector.svg"

const FirstBlock = () => {
    return (
        <div className="FirstBlock">
            <div className="contentWrapper">
                <div className="FirstBlockName">
                    <img src={leadrium} alt="leadrium" />
                </div>
                <div className="FirstBlockGeneral">
                    <div className="FirstBlockHeader">
                        <div className="FirstBlockSubTitle">НАШ шоурил</div>
                        <img src={vector} alt="vector" />
                    </div>
                    <div className="FirstBlockVideo"><iframe width="916" height="518" src="https://www.youtube.com/embed/IFBqJSPs5ek" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe></div>
                </div>
            </div>
        </div>
    );
}

export default FirstBlock;