import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'reduce/operation';
import Login from 'pages/login';
import Main from 'pages/main';
import Registration from 'pages/registration';
import { Routes, Route , NavLink} from "react-router-dom";



const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      dispatch(fetchContacts(parsedContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>

     <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">About</NavLink>
      <NavLink to="/registration">Products</NavLink>
     </nav>
      
      
      
      <Routes>
             <Route path="/" element={<Login />} />
             <Route path="/contacts" element={<Main />} /> 
             <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
