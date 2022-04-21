import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateWrapper } from './utils/routerWrappers';
import HomePage from './pages/home.page';
import AppLayout from './layouts/app.layout';
import LoginPage from './pages/login.page';
import SignupPage from './pages/signup.page';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    
                    <Route index element={<HomePage />} />

                    {/* Public Routes */}
                    <Route path="/" element={<PrivateWrapper restricted={true} redirectTo='/private' />}>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<SignupPage />} />
                    </Route>

                    {/* Private Routes */}
                    <Route path="/private" element={<PrivateWrapper redirectTo='/login' />}>
                        <Route index element={<HomePage />} />
                        <Route path="*" element={<HomePage />} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;