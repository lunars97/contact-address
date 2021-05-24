import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContacts from "./components/AddContacts/AddContacts";
import ContactList from "./components/ContactList/ContactList";
import Home from "./components/Home/Home";
import { history } from "./components/helpers/history";
import EditContact from "./components/EditContact/EditContact";

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddContacts} />
                <Route exact path="/
                list" component={ContactList} />
                <Route exact path="/edit" component={EditContact} />
            </Switch>
        </Router>
    );
};

export default Routes;
