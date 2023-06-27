import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'reduce/operation';
import Login from 'pages/login';
import { Main } from 'pages/main';
import Registration from 'pages/registration';
import Home from 'pages/home';
import { Routes, Route } from "react-router-dom";
import AllMenus from './AllMenus';
import { currentUser } from 'reduce/auth-operations';
import { PrivateRoute } from 'PrivateRoute';
 import { RestrictedRoute } from './RestrictedRoute';
import { authSelectors } from 'reduce/auth-selectors';




const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

 const isFetchingCurrentUser = useSelector(authSelectors.isRefreshingCurrent)
  useEffect(() => {
    dispatch(currentUser())
  },[dispatch])

useEffect(() => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    console.log(savedContacts);
    try {
      const parsedContacts = JSON.parse(savedContacts);
      dispatch(fetchContacts(parsedContacts));
    } catch (error) {
      console.error('Error parsing contacts:', error);
      // Обработка ошибки парсинга JSON
    }
  }
}, [dispatch]);


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  
    return (
    
      !isFetchingCurrentUser && (
       <div>

      <nav>
        <AllMenus/>
      
     </nav>
      
      
      
      <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login/>} />}/>
             <Route path="/contacts"  element={<PrivateRoute  redirectTo="/login" component={<Main/>} />}/>
             <Route path="/registration" element={<RestrictedRoute redirectTo="/contacts" component={<Registration/>} />}/>
      </Routes>
        </div>
        )
  );
};

export default App;
