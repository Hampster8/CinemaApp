import React from 'react';

import SignupForm from '../components/signup.components';

const SignupPage = () => {
    return (
        <div style={{
            marginTop: 200,
            justifyContent: 'center',
            display: 'flex'
        }}>
            <div>
                <SignupForm />
            </div>
        </div>
    );
}

export default SignupPage;