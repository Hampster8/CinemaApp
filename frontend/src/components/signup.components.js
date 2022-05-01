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
        <div style={style.container}>
            <input style={style.input} ref={el => inputRef.current['email'] = el} placeholder='Email..' />
            <input style={style.input} ref={el => inputRef.current['firstname'] = el} placeholder='Firstname..' />
            <input style={style.input} ref={el => inputRef.current['lastname'] = el} placeholder='Lastname..' />
            <input style={style.input} ref={el => inputRef.current['password'] = el} type='password' placeholder='Password..' />
            <div style={style.actionContainer}>
                <button onClick={signup}>Signup</button>
                <div style={style.actionContainerSub}>
                    <p style={{...style.actionContainerSubItem, opacity: 0.5}}>or</p>
                    <Link style={style.actionContainerSubItem} className='link' to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    );
}

const style = {
    container: {
        textAlign: 'center',
        width: 600,
    },
    input: {
        backgroundColor: '#4F4F4F',
        width: '100%',
        boxSizing: 'border-box',
        marginTop: 20,
        fontSize: 12,
        padding: 10,
        color: '#fff',
        borderRadius: 5,
        textDecoration: 'none',
        border: 'none',
        fontFamily: 'Nunito',
        fontStyle: 'bold',
        fontWeight: 700
    },
    actionContainer: {
        marginTop: 30,
        display: 'flex',
        height : 50
    },
    actionContainerSub: {
        display: 'flex'
    },
    actionContainerSubItem: {
        height: '100%',
        margin: 0,
        padding: 0,
        marginLeft: 30,
        paddingTop: 15,
        color: '#fff',
    }
}

export default SignupForm;