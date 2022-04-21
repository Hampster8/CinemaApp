import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../contexts/authentication.contexts';

export const PrivateRouteWrapper = ({restricted = false, redirectTo}) => {

  const auth = useAuth();
  const [loading, SetLoading] = useState(true);
  const [isAuth, SetIsAuth] = useState(false);

  useEffect(() => {
    auth.verify().then(isAuth => {
      SetIsAuth(isAuth);
      SetLoading(false);
    });
  }, []);

  return loading ? <p>Loading...</p> : (restricted === isAuth) ? <Navigate to={redirectTo} /> : <Outlet />;
};
