import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../contexts/authentication.context';

export const PrivateWrapper = ({restricted = false, redirectTo}) => {

  const auth = useAuth();
  const [loading, SetLoading] = useState(true);
  const [redirect, SetRedirect] = useState(false);

  useEffect(() => {
    auth.verify().then(isAuth => {
      SetRedirect(restricted === isAuth);
      SetLoading(false);
    });
  }, []);

  return loading ? <p>Loading...</p> : redirect ? <Navigate to={redirectTo} /> : <Outlet />
};
