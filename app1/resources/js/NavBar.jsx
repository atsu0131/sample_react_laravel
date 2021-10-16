import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/app/">Home</Link>
            <Link to="/app/about">About</Link>
        </div>
    );
};

export default NavBar;
