import React, {useState} from 'react';

const AuthenticationContext = React.createContext(null);
export const AuthenticationProvider = ({children}) => {

    const [authorized, SetAuthorized] = useState(false);

    const login = () => SetAuthorized(true);

    const signup = () => console.log('signup');

    const logout = () => SetAuthorized(false);

    const verify = () => {
        return fetch('/api/auth/verify')
        .then(res => {
            SetAuthorized(res.ok);
            return authorized;
        });
    };

    const data = {
        login,
        signup,
        logout,
        verify,
    };

    return (
        <AuthenticationContext.Provider value={data}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export const useAuth = () => React.useContext(AuthenticationContext);