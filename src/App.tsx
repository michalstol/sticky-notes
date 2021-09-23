import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthWatcher from './components/AuthWatcher/AuthWatcher';
import ConnectedRoute from './components/ConnectedRoute/ConnectedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Connection from './views/Connection/Connection';
import SignIn from './views/SignIn/SignIn';

function App() {
    return (
        <div className="sticky-notes">
            <AuthWatcher />

            <Router>
                <>
                    <Switch>
                        <Route path="/" exact>
                            {/* Firebase connection */}
                            <Connection />
                        </Route>

                        <ConnectedRoute path="/sign-in">
                            {/* Authorization */}
                            <SignIn />
                        </ConnectedRoute>

                        <PrivateRoute path="/dashboard">
                            <h1>asd</h1>
                            {/* Main view */}
                        </PrivateRoute>

                        <ConnectedRoute path="/shared/:noteId">
                            {/* Shared note */}
                        </ConnectedRoute>
                    </Switch>
                </>
            </Router>
        </div>
    );
}

export default App;
