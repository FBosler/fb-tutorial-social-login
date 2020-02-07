import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import About from "./components/layout/About";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </div>
        </Router>
    );
};

export default App;
