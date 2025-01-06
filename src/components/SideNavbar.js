import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNavbar.css';

const SideNavbar = () => {
    return (
        <div className="side-navbar">
            <h2 className="logo">MyApp</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category" activeClassName="active">
                            Category
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/article" activeClassName="active">
                            Article
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active">
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" activeClassName="active">
                            Signup
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNavbar;
