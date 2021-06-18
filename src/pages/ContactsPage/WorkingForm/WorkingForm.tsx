import "./WorkingForm.css"
import vector from "../../../assets/img/Vector.svg"


const WorkingForm = () => {
    return (
        <>
            <div className="workingForm">
                <div className="contentWrapper">
  
                        <div className="workingFormTitle">Начнем работать вместе?</div>
                        <div className="workingFormWrapper">
                            <input type="text" placeholder="Как вас зовут?" />
                            <input type="text" placeholder="Телефон" />
                           <div className="textArea">
                            <div className="textAreaTitle">Расскажите о вашем проекте</div>
                            <textarea name="coment" id="coment" placeholder="Комментарий" ></textarea>
                        </div>
                        </div>
                
                    <div className="workingFormButton">
                        <div className="workingFormButtonText">Отправить</div>
                        <img src={vector} alt="vector" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkingForm;
