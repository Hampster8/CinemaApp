import React from 'react';
import { Outlet } from "react-router-dom";
import { useAuth } from '../contexts/authentication.contexts';
import Header from '../components/header.components';

const AppLayout = () => {
    const auth = useAuth();

    const LoggedInData = () => {
        if (!auth.user) return <p>Not logged in!</p>;

        return (
            <div>
                <p>Logged in as: {auth.user.email}</p>
                <button onClick={auth.logout}>Logout</button>
            </div>
        )
    };


    return (
        <div>
            <Header />
            <LoggedInData />
            <Outlet />
        </div>
    );
}

export default AppLayout;