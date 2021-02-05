import React from 'react';
import NavElements from './NavElements';
import navbarStyles from './navbar.module.css';

const NavBar = () => (
    <nav className={navbarStyles.navBar}>
        <ul className={navbarStyles.list}>
            <NavElements to={"/"}>
                About
            </NavElements>
            <NavElements to={"/"}>
                Projects
            </NavElements>
            <NavElements to={"/"}>
                Resume
            </NavElements>
        </ul>
    </nav>
)

export default NavBar;