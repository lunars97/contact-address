import React, { useContext, useEffect, useState } from "react";
import { contactContext } from "../../context/ContactContext";
import "../EditContact/EditContact.css";

const EditContact = (props) => {
    const { contactToEdit, saveContacts } = useContext(contactContext);
    const [newEditItem, setNewEditItem] = useState({});

    useEffect(() => {
        setNewEditItem(contactToEdit);
    }, [contactToEdit]);

    function handleEditInput(e) {
        let newTask = {
            ...newEditItem,
            [e.target.image]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.surname]: e.target.value,
            [e.target.phone]: e.target.value,
        };
        setNewEditItem(newTask);
    }
    return (
        <div className="wrapper">
            {newEditItem ? (
                <>
                    <input
                        placeholder="Image"
                        className="edit-inp"
                        name="image"
                        value={newEditItem.image}
                        onChange={handleEditInput}
                    />
                    <input
                        placeholder="Name"
                        className="edit-inp"
                        name="name"
                        value={newEditItem.name}
                        onChange={handleEditInput}
                    />
                    <input
                        placeholder="Surname"
                        className="edit-inp"
                        name="surname"
                        value={newEditItem.surname}
                        onChange={handleEditInput}
                    />
                    <input
                        placeholder="Telephone"
                        className="edit-inp"
                        name="phone"
                        value={newEditItem.phone}
                        onChange={handleEditInput}
                    />
                    <button
                        className="saveBtn"
                        onClick={() => saveContacts(newEditItem, props.history)}
                    >
                        Save
                    </button>
                </>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
};
export default EditContact;
