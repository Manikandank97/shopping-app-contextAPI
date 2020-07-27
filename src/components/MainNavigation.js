import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = (props) => (
    <header className="bd-navbar">
        <nav>
            <ul className="nav nav-fill justify-content-center">
                <li className="nav-item">
                    <Link to='/'>Product</Link>
                </li>
                <li className="nav-item">
                    <Link to='/cart'>Cart ({props.cartItemNumber})</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default MainNavigation;