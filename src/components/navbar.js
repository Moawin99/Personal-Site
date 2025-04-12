import React from 'react';
import NavElements from './NavElements';
import * as navbarStyles from './navbar.module.css';

const NavBar = () => (
    <nav className={navbarStyles.navBar}>
        <ul className={navbarStyles.list}>
            <NavElements to="aboutMe">
                About
            </NavElements>
            <NavElements to="projectBox">
                Projects
            </NavElements>
            <NavElements to="resume">
                Resume
            </NavElements>
        </ul>
    </nav>
)

export default NavBar;