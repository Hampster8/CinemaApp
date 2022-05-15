import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthenticationProvider } from './src/contexts/authentication.contexts';
import Router from './src/router';
import Confirmation from './src/components/confirmation.components';

// The application
const App = () => {
    // Current flow:  App -> Context -> Router -> Pages
    return (
            <AuthenticationProvider>
                <Router />
            </AuthenticationProvider>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);