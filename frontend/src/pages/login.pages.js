import React from 'react';

import LoginForm from '../components/login.components';

const LoginPage = () => {
    return (
        <div style={{
            marginTop: 200,
            justifyContent: 'center',
            display: 'flex'
        }}>
            <div>
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;