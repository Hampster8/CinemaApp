import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authentication.contexts';
import { secondaryColor } from '../styles/global.styles';

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
        <div style={style.container} className='shadow'>
            <h1 style={{color: '#fff', fontSize: 30}} >Lets get started!</h1>
            <input style={style.input} ref={el => inputRef.current['email'] = el} placeholder='Email..' />
            <input style={style.input} ref={el => inputRef.current['firstname'] = el} placeholder='Firstname..' />
            <input style={style.input} ref={el => inputRef.current['lastname'] = el} placeholder='Lastname..' />
            <input style={style.input} ref={el => inputRef.current['password'] = el} type='password' placeholder='Password..' />
            <div style={style.actionContainer}>
                <button onClick={signup}>Signup</button>
                <Link style={style.link} className='link' to={'/login'}>Login</Link>
            </div>
        </div>
    );
}

const style = {
    container: {
        textAlign: 'center',
        width: 300,
        backgroundColor: secondaryColor,
        padding: 40,
        paddingBottom: 70,
        borderRadius: 10,
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
        justifyContent: 'space-between',
        height : 50
    },
    link: {
        height: '100%',
        margin: 0,
        padding: 0,
        marginLeft: 15,
        paddingTop: 15,
        color: '#fff',
    }
}

export default SignupForm;