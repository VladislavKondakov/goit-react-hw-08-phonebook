

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'reduce/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component ;
};

