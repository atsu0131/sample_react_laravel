import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import TodoList from "./TodoList";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Route path="/app/about" component={About} />
            <Route exact path="/app/" component={Home} />
            <Route path="/app/todo" component={TodoList} />
        </BrowserRouter>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
