import React from "react";
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux";
import { addContact } from "reduce/operation";
import { Button } from "./AddContactForm.styled";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input type="text" name="name" />
      </label>
      <label htmlFor="number">
        Number
        <input type="text" name="number" />
      </label>
      <Button type="submit">Add Contact</Button>
    </form>
  );
};

export default AddContactForm;
