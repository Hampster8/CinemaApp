import React from 'react';
import useLocalStorage from '../utils/localStorage';

const AuthenticationContext = React.createContext(null);
export const AuthenticationProvider = ({children}) => {

    const [user, SetUser] = useLocalStorage("userData");

    const login = (email, password) => {
        fetch('/api/auth/login',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }).then(res => {
            if (res.ok) window.location.href="/private";
        });
    };

    const signup = (email, firstname, lastname, password) => {
        fetch('/api/auth/signup',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "firstName": firstname,
                "lastName": lastname,
                "password": password
            })
        }).then(res => {
            if (res.ok) window.location.href="/login";
        });
    };

    const logout = () => {
        fetch('/api/auth/logout')
        .then(() => {
            SetUser(null);
            window.location.href="/login"
        });
    };

    const verify = () => {
        return fetch('/api/auth/verify')
        .then(res => res.json())
        .then(data => {
            SetUser(data);
            return true;
        }).catch(() => {return false})
    };

    const data = {
        login,
        signup,
        logout,
        verify,
        user
    };

    return (
        <AuthenticationContext.Provider value={data}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export const useAuth = () => React.useContext(AuthenticationContext);