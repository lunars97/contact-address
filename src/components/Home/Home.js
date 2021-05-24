import React from "react";
import AddContacts from "../AddContacts/AddContacts";
import ContactList from "../ContactList/ContactList";
const Home = () => {
    return (
        <div>
            <AddContacts />
            <ContactList />
        </div>
    );
};
export default Home;
