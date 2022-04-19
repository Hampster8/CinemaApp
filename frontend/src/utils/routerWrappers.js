import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../contexts/authentication.context';

export const PrivateWrapper = () => {

  const auth = useAuth();
  const [loading, SetLoading] = useState(true);
  const [authenticated, SetAuthenticated] = useState(false);

  useEffect(() => {
    auth.verify().then(res => {
      SetAuthenticated(res);
      SetLoading(false);
    });  
  }, []);

  return loading ? <p>Loading...</p> : authenticated ? <Outlet /> : <Navigate to="/login" />
};