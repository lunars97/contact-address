import React, { useContext, useState } from "react";
import { contactContext } from "../../context/ContactContext";
import "./AddContacts.css";

const AddContacts = () => {
    const [inpImg, setInpImg] = useState("");
    const [inpName, setInpName] = useState("");
    const [inpSurname, setInpSurname] = useState("");
    const [inpPhone, setInpPhone] = useState("");
    const { addContact } = useContext(contactContext);
    const { search, searchData } = useContext(contactContext);
    const [searchValue, setSearchValue] = useState("");

    const handleValue = (e) => {
        setSearchValue(e.target.value);
        search(e.target.value);
    };

    function handleClick() {
        let newObj = {
            image: inpImg,
            name: inpName,
            surname: inpSurname,
            phone: inpPhone,
        };

        addContact(newObj);
        setInpImg("");
        setInpName("");
        setInpSurname("");
        setInpPhone("");
    }
    return (
        <div className="inputs">
            <input
                className="inp"
                value={inpImg}
                onChange={(e) => setInpImg(e.target.value)}
                type="text"
                placeholder="Image"
            />

            <input
                className="inp"
                value={inpName}
                onChange={(e) => setInpName(e.target.value)}
                type="text"
                placeholder="Name"
            />

            <input
                className="inp"
                value={inpSurname}
                onChange={(e) => setInpSurname(e.target.value)}
                type="text"
                placeholder="surname"
            />

            <input
                className="inp"
                value={inpPhone}
                onChange={(e) => setInpPhone(e.target.value)}
                type="phone"
                placeholder="Telephone"
            />
            <input
                className="inp"
                placeholder="Search..."
                value={searchValue}
                onChange={handleValue}
            />
            <button className="addBtn" onClick={handleClick}>
                Add
            </button>
        </div>
    );
};

export default AddContacts;
