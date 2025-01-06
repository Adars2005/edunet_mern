import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>NewsApp</h1>
            <ul>
                <li>Home</li>
                <li>World</li>
                <li>Sports</li>
                <li>Technology</li>
            </ul>
        </nav>
    );
};

export default Navbar;
