import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Connection from './views/Connection/Connection';
import SignIn from './views/SignIn/SignIn';
import Dashboard from './views/Dashboard/Dashboard';

import AuthWatcher from './components/AuthWatcher/AuthWatcher';
import ConnectedRoute from './components/ConnectedRoute/ConnectedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import View from './components/View/View';
import SwitchGroup from './components/SwitchGroup/SwitchGroup';

function App() {
    return (
        <div className="sticky-notes">
            <AuthWatcher />

            <Router>
                {/* <div style={{ position: 'fixed', zIndex: 9999 }}>
                    <Link to="/dashboard">D</Link> | <Link to="/note">N</Link>
                </div> */}

                <SwitchGroup>
                    <Route path="/" exact>
                        <View>
                            <Connection />
                        </View>
                    </Route>

                    <ConnectedRoute path="/sign-in">
                        <View>
                            <SignIn />
                        </View>
                    </ConnectedRoute>

                    <PrivateRoute path="/dashboard">
                        <View>
                            <Dashboard />
                        </View>
                    </PrivateRoute>

                    <PrivateRoute path="/note">
                        <View>
                            <h1 style={{ backgroundColor: 'green', margin: 0 }}>
                                dsa
                            </h1>
                        </View>
                    </PrivateRoute>

                    <ConnectedRoute path="/shared/:noteId">
                        <p>asd</p>
                    </ConnectedRoute>
                </SwitchGroup>
            </Router>
        </div>
    );
}

export default App;
