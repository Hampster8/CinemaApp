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
        <div style={style.container}>
            <div><input style={style.input} ref={el => inputRef.current['email'] = el} placeholder='Email..' /></div>
            <div><input style={style.input} ref={el => inputRef.current['password'] = el} type='password' placeholder='Password..' /></div>
            <div style={style.actionContainer}>
                <button onClick={login} >Login</button>
                <div style={style.actionContainerSub}>
                    <p style={{...style.actionContainerSubItem, opacity: 0.5}}>or</p>
                    <Link style={style.actionContainerSubItem} className='link' to={'/signup'}>Signup</Link>
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
        width: '100%',
        boxSizing: 'border-box',
        marginTop: 20,
        fontSize: 12,
        padding: 10,
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

export default LoginForm;