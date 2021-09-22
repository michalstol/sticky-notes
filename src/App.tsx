import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './views/SignIn/SignIn';

function App() {
    return (
        <div className="sticky-notes">
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact>
                            {/* Firebase connection */}
                        </Route>

                        <Route path="/sign-in">
                            {/* Authorization */}
                            <SignIn />
                        </Route>

                        <Route path="/dashboard">{/* Main view */}</Route>

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
