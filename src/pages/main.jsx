import React from "react";
import AddContactForm from "components/AddContactForm/AddContactForm"
import ContactList from "components/ContactList/ContactList"
import { DivMain } from "Main.styled";

export function Main() {
    return (
        <DivMain>
            <AddContactForm />
            <ContactList/>
        </DivMain>
    )
}