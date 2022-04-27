import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthenticationProvider } from './src/contexts/authentication.contexts';
import Router from './src/router';

import { rootStyle } from './src/styles/global.styles';

// The application
const App = () => {
    // Current flow:  App -> Context -> Router -> Pages
    return (
        <div style={rootStyle}>
            <AuthenticationProvider>
                <Router />
            </AuthenticationProvider>
        </div>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);