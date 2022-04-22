import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authentication.contexts';


const LoginForm = () => {

    const inputRef = useRef({});

    useEffect(() => {
        inputRef.current['email'].focus()
        inputRef.current['email'].value = '';
        inputRef.current['password'].value = '';
    }, []);

    const auth = useAuth();
    const login = () => {
        const email = inputRef.current.email.value;
        const password = inputRef.current.password.value;
        auth.login(email, password);
    }

    return (
        <div>
            <input ref={el => inputRef.current['email'] = el} placeholder='Email..' />
            <input ref={el => inputRef.current['password'] = el} type='password' placeholder='Password..' />
            <div>
                <button onClick={login} >Login</button>
                <p>or</p>
                <Link to={'/signup'}>Signup</Link>
            </div>
        </div>
    );
}

export default LoginForm;