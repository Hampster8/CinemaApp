import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRouteWrapper } from './utils/routerWrappers.utils';
import HomePage from './pages/home.pages';
import AppLayout from './layouts/app.layouts';
import LoginPage from './pages/login.pages';
import SignupPage from './pages/signup.pages';

import MyTickets from './pages/myTickets.page';
import MoviePage from './pages/movie.page';
import AboutPage from './pages/about.pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>

                    <Route index element={<HomePage />} />
                    <Route path='/movie/:id' element={<MoviePage />} />
                    <Route path='/about' element={<AboutPage />} />

                    {/* Public Routes */}
                    <Route path="/" element={<PrivateRouteWrapper restricted={true} redirectTo='/private' />}>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<SignupPage />} />
                    </Route>

                    {/* Private Routes */}
                    <Route path="/private" element={<PrivateRouteWrapper redirectTo='/login' />}>
                        <Route index element={<HomePage />} />
                        <Route path="*" element={<HomePage />} />
                        <Route path="/private/myTickets" element={<MyTickets />} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;