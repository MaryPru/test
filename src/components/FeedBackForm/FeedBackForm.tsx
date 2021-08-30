import "./FeedBackForm.css"
import ArrowIcon from "../Icons/ArrowIcon";
import {useState} from "react";

interface ChangeColor {
    type?: 'white' | 'black';
}

const FeedBackForm = (props: ChangeColor) => {
    const {type='black'} = props

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')

    const submit = () => {
        if ((name === '') || (phone === '')) {
            alert('имя и телефон не должны быть пустыми')
        } else {
            setTimeout(() => {
                alert(`Ваши данные ушли, ждите звонка. Ваше имя: ${name},Ваш номер:${phone}`)
            }, 1000)
        }
    }

    return (
        <>
            <div className={`feedBackForm feedBackForm-${type}`}>
                <div className="contentWrapper">
                    <div className="title">
                        Начнем работать вместе?
                    </div>
                    <div className="formInputs">
                        <input
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                            placeholder={'Как вас зовут?'}
                        />
                        <input
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            type="text"
                            placeholder={'Телефон'}
                        />
                        <div className="textArea">
                            <label htmlFor="comment">Расскажите о вашем проекте</label>
                            <textarea
                                name="comment"
                                id="comment"
                                placeholder={'Комментарий'}
                                cols={30}
                                rows={10}
                                value={comment}
                                onChange={(event) => setComment(event.target.value)}
                            />
                        </div>
                        <button onClick={submit}>
                            Отправить <ArrowIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedBackForm;
