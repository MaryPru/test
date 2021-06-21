import "./FeedBackFormWhite.css"
import ArrowIcon from "../../../components/Icons/ArrowIcon";
import { useState } from "react";

const FeedBackFormWhite = () => {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [comment,setComment] = useState('')

    const submit = () => {
        if ((name === '') || (phone === '')) {
            alert('имя и телефон не должны быть пустыми')
        } else {
            console.log('Ваше имя',name)
            console.log('Ваш номер',phone)
            console.log('Ваш комментарий',comment)
            setTimeout(() => {
                alert(`Ваши данные ушли, ждите звонка. Ваше имя: ${name},Ваш номер:${phone}`)
            },1000)
        }
    }

    return (
        <>
            <div className="feedBackFormWhite">
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
                            ></textarea>
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

export default FeedBackFormWhite;