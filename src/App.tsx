import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AuthWatcher from './components/AuthWatcher/AuthWatcher';
import ConnectedRoute from './components/ConnectedRoute/ConnectedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Connection from './views/Connection/Connection';
import SignIn from './views/SignIn/SignIn';
import View from './components/View/View';
import SwitchGroup from './components/SwitchGroup/SwitchGroup';

function App() {
    return (
        <div className="sticky-notes">
            <AuthWatcher />

            <Router>
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
                            <h1 style={{ backgroundColor: 'red', margin: 0 }}>
                                asd
                            </h1>
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
