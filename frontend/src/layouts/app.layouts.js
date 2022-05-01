import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/header.components';

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default AppLayout;