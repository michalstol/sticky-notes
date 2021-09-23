import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AuthWatcher from './components/AuthWatcher/AuthWatcher';
import ConnectedRoute from './components/ConnectedRoute/ConnectedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignIn from './views/SignIn/SignIn';

function App() {
    return (
        <div className="sticky-notes">
            <AuthWatcher showState />

            <Router>
                <>
                    <Switch>
                        <Route path="/" exact>
                            {/* Firebase connection */}
                        </Route>

                        <ConnectedRoute path="/sign-in">
                            {/* Authorization */}
                            <SignIn />
                        </ConnectedRoute>

                        <PrivateRoute path="/dashboard">
                            <h1>asd</h1>
                            {/* Main view */}
                        </PrivateRoute>

                        <Route path="/shared/:noteId">
                            {/* Shared note */}
                        </Route>
                    </Switch>
                </>
            </Router>
        </div>
    );
}

export default App;
