import React, {createContext, useContext, useState} from 'react';
import useLocalStorage from '../utils/localStorage.utils';

const AuthenticationContext = createContext(null);
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
            if (res.status == 401) {
                setToast({
                    msg: 'Invalid email or password!',
                    warning: true,
                    render: true
                });
            }
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
            res.json().then(data => {
                setToast({
                    msg: data.error,
                    warning: true,
                    render: true
                });
            })
        });
    };

    const logout = () => {
        fetch('/api/auth/logout')
        .then(() => {
            SetUser(null);
            window.location.href="/"
        });
    };

    const verify = () => {
        return fetch('/api/auth/verify')
        .then(res => {
            if (res.status === 504){
                setToast({
                    msg: 'Unable to reach the backend, ' + res.statusText,
                    warning: true,
                    render: true
                });
            }
            return res.json()
        })
        .then(data => {
            SetUser(data);
            return true;
        }).catch(() => {
            {return false}
        })
    };

    const [toast, setToast] = useState({
        msg: '',
        render: false,
        warning: false
    })

    const Toast = () => {
        if (!toast.render) return null;
        return (
            <div style={{
                backgroundColor: toast.warning ? 'red' : 'green',
                postition: 'fixed',
                borderRadius: 2,
                right: 0,
                left: 0,
                padding: 2,
                top: 0
            }}>
                <p style={{
                    color: '#fff',
                    fontFamily: 'Nunito',
                    fontStyle: 'bold',
                    fontWeight: 700,
                    fontSize: 18,
                    textAlign: 'center',
                }} >{toast.msg}</p>
            </div>
        );
    }

   

    const data = {
        login,
        signup,
        logout,
        verify,
        user,
        setToast
    };

    return (
        <AuthenticationContext.Provider value={data}>
            <div>
                <Toast />
                {children}
            </div>
        </AuthenticationContext.Provider>
    );
}

export const useAuth = () => useContext(AuthenticationContext);