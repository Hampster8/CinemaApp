import React from 'react';
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <p>LAYOUT</p>
            <Outlet />
        </div>
    );
}

export default AppLayout;