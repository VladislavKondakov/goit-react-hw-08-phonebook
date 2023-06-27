import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectIsLoading } from "reduce/selectors";
import { fetchContacts, deleteContact } from "reduce/operation";
import { LiContact } from "./ContactList.styled";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchContacts()); // Выполняется при монтировании компонента
  }, [dispatch]);

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
      <ul style={{ listStyleType: 'none' }}>
        {getFilteredContacts() &&
          getFilteredContacts().map(({ id, name, number }) => (
            <LiContact key={id}>
              {name} - {number}
              <button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </LiContact>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
