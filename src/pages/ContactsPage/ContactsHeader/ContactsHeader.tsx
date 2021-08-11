import "./ContactsHeader.css"

const ContactsHeader = () => {
    return (
        <>
            <div className="contactsHeader">
                <div className="contentWrapper">
                    <div className="contactsHeaderWrapper">
                        <div className="ContactsHeaderTitle">Контакты</div>
                        <div className="ContactsHeaderAttributsWrapper">
                            <div className="WrapperDescriptions">
                                <div className="ContactsHeaderAttributTitle">Email</div>
                                <div className="ContactsHeaderAttributDescription">name@domain.com</div>
                            </div>
                            <div className="WrapperDescriptions">
                                <div className="ContactsHeaderAttributTitle">Phone</div>
                                <div className="ContactsHeaderAttributDescription">+34 (846) 548-96-96</div>
                            </div>
                            <div className="WrapperDescriptions">
                                <div className="ContactsHeaderAttributTitle">Lacation</div>
                                <div className="ContactsHeaderAttributDescription">4517 Washington Ave. Manchester, Kentucky <br /> 39495</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactsHeader;
