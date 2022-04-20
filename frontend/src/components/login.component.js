import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authentication.context';


const LoginForm = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const auth = useAuth();
    const login = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        auth.login(email, password);
    }

    return (
        <div>
            <input ref={emailRef} name='email' placeholder='Email..' />
            <input type='password' ref={passwordRef} name='password' placeholder='Password..' />
            <div>
                <button onClick={login} >Login</button>
                <p>or</p>
                <Link to={'/signup'}>Signup</Link>
            </div>
        </div>
    );
}

export default LoginForm;