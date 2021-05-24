import React, { useReducer } from "react";
import axios from "axios";

export const contactContext = React.createContext();

const INIT_STATE = {
    contacts: [],
    contactToEdit: null,
};
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CONTACTS_DATA":
            return { ...state, contacts: action.payload };
        case "EDIT_CONTACT":
            return { ...state, contactToEdit: action.payload };
        default:
            return state;
    }
};

const ContactContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const getContactsData = async () => {
        let { data } = await axios("http://localhost:8000/contacts");

        dispatch({
            type: "GET_CONTACTS_DATA",
            payload: data,
        });
    };

    const addContact = async (newTask) => {
        await axios.post("http://localhost:8000/contacts", newTask);
        getContactsData();
    };
    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:8000/contacts/${id}`);
        getContactsData();
    };
    const editContact = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`);
        dispatch({
            type: "EDIT_CONTACT",
            payload: data,
        });
    };
    const saveContacts = async (newTask, history) => {
        try {
            await axios.patch(
                `http://localhost:8000/contacts/${newTask.id}`,
                newTask
            );
            history.push("/");
        } catch (error) {
            alert("There is an error");
        }
    };
    async function search(searchValue) {
        let { data } = await axios(
            `http://localhost:8000/contacts/?q=${searchValue}`
        );

        dispatch({
            type: "GET_CONTACTS_DATA",
            payload: data,
        });
    }

    return (
        <contactContext.Provider
            value={{
                getContactsData,
                contacts: state.contacts,
                contactToEdit: state.contactToEdit,
                addContact,
                deleteContact,
                editContact,
                saveContacts,
                search,
            }}
        >
            {children}
        </contactContext.Provider>
    );
};
export default ContactContextProvider;
