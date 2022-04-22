import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authentication.contexts';

const SignupForm = () => {

    const inputRef = useRef({});

    useEffect(() => {
        inputRef.current['email'].focus()
        inputRef.current['email'].value = '';
        inputRef.current['firstname'].value = '';
        inputRef.current['lastname'].value = '';
        inputRef.current['password'].value = '';
    }, []);

    const auth = useAuth();
    const signup = () => {
        const email = inputRef.current.email.value;
        const firstname = inputRef.current.firstname.value;
        const lastname = inputRef.current.lastname.value;
        const password = inputRef.current.password.value;
        auth.signup(email, firstname, lastname, password);
    }

    return (
        <div>
            <input ref={el => inputRef.current['email'] = el} placeholder='Email..' />
            <input ref={el => inputRef.current['firstname'] = el} placeholder='Firstname..' />
            <input ref={el => inputRef.current['lastname'] = el} placeholder='Lastname..' />
            <input ref={el => inputRef.current['password'] = el} type='password' placeholder='Password..' />
            <div>
                <button onClick={signup}>Signup</button>
                <p>or</p>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    );
}

export default SignupForm;