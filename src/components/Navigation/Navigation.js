import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => (
    <header className="Toolbar">
        <h1 className="Heading">Relayr</h1>
        <nav >
            <ul className="NavigationItems">
                <li className="NavigationItem">
                    <NavLink
                        to='/' exact 
                        active="true">Dashboard</NavLink> 
                </li>
                <li className="NavigationItem">
                    <NavLink
                        to='/account'>My Account</NavLink> 
                </li>
            </ul>
        </nav>
    </header>
)

export default navigation;