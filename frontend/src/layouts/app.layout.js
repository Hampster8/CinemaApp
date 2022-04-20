import React from 'react';
import { Outlet } from "react-router-dom";
import { useAuth } from '../contexts/authentication.context';

const AppLayout = () => {

    const auth = useAuth();

    console.log(auth.user);

    const LoggedInData = () => {
        if (!auth.user) return null;

        return (
            <div>
                <p>Logged in as: {auth.user.email}</p>
                <button onClick={auth.logout}>Logout</button>
            </div>
        )
    };

    return (
        <div>
            <LoggedInData />
            <Outlet />
        </div>
    );
}

export default AppLayout;