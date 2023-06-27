import React from "react";
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux";
import { addContact } from "reduce/operation";
import { Button,LabelAddContact,FormAddContact } from "./AddContactForm.styled";


const AddContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newContact = {
      id: nanoid(),
      name: formData.get('name'),
      number: formData.get('number').replace(/\D/g, ''),
    };
    dispatch(addContact(newContact));
    event.currentTarget.reset();
  };

  return (
    <FormAddContact onSubmit={handleSubmit}>
      <LabelAddContact htmlFor="name">
        Name
        <input type="text" name="name" />
      </LabelAddContact>
      <LabelAddContact htmlFor="number">
        Number
        <input type="text" name="number" />
      </LabelAddContact>
      <Button type="submit">Add Contact</Button>
    </FormAddContact>
  );
};

export default AddContactForm;
