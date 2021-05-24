import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { contactContext } from "../../context/ContactContext";
import "../ContactList/ContactList.css";

const ContactList = () => {
    const {
        contacts,
        getContactsData,
        deleteContact,
        editContact,
    } = useContext(contactContext);
    const history = useHistory();
    useEffect(() => {
        getContactsData();
    }, []);

    const handleClick = (id) => {
        editContact(id);
        history.push("/edit");
    };
    return (
        <div className="list">
            {contacts.map((item) => (
                <ul>
                    <li>
                        <img className="image" key={item.id} src={item.image} />
                    </li>
                    <li>
                        <span>Name: </span>
                        {item.name}
                    </li>
                    <li>
                        <span>Surname: </span>
                        {item.surname}
                    </li>
                    <li>
                        <span>Telephone: </span>
                        {item.phone}
                    </li>
                    <button
                        className="list-btn"
                        onClick={() => deleteContact(item.id)}
                    >
                        Delete
                    </button>
                    <button
                        className="list-btn"
                        onClick={() => handleClick(item.id)}
                    >
                        Edit
                    </button>
                </ul>
            ))}
        </div>
    );
};

export default ContactList;
