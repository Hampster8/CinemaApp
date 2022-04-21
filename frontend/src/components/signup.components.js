import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authentication.contexts';

const SignupForm = () => {
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const passwordRef = useRef();

    const auth = useAuth();
    const signup = () => {
        const email = emailRef.current.value;
        const firstname = firstNameRef.current.value;
        const lastname = lastNameRef.current.value;
        const password = passwordRef.current.value;
        auth.signup(email, firstname, lastname, password);
    }

    return (
        <div>
            <input ref={emailRef} name='email' placeholder='Email..' />
            <input ref={firstNameRef} name='firstname' placeholder='Firstname..' />
            <input ref={lastNameRef} name='lastname' placeholder='Lastname..' />
            <input type='password' ref={passwordRef} name='password' placeholder='Password..' />
            <div>
                <button onClick={signup}>Signup</button>
                <p>or</p>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    );
}

export default SignupForm;