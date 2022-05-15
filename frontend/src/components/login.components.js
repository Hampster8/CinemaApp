import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authentication.contexts';
import { secondaryColor } from '../styles/global.styles';


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
        <div style={style.container} className='shadow'>
            <h1 style={{color: '#fff', fontSize: 30}} >Welcome back!</h1>
            <div><input style={style.input} ref={el => inputRef.current['email'] = el} placeholder='Email..' /></div>
            <div><input style={style.input} ref={el => inputRef.current['password'] = el} type='password' placeholder='Password..' /></div>
            <div style={style.actionContainer}>
                <button style={{width: 150}} onClick={login} >Login</button>
                <Link style={style.link} className='link' to={'/signup'}>Signup</Link>
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

export default LoginForm;