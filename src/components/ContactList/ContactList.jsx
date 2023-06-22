import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectIsLoading } from "reduce/selectors";
import { deleteContact } from "reduce/operation";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const getFilteredContacts = () => {
    if (contacts && searchTerm) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    }
    return contacts;
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div>
        <input
          type="text"
          placeholder="Search Contacts"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <ul>
        {getFilteredContacts() &&
          getFilteredContacts().map(({ id, name, number }) => (
            <li key={id}>
              {name} - {number}
              <button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
