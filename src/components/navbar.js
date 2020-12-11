import React from 'react';
import NavElements from './NavElements';
import navbarStyles from './navbar.module.css';

const NavBar = () => (
    <nav>
        <ul className={navbarStyles.list}>
            <NavElements to={"/"}>
                About
            </NavElements>
            <NavElements to={"/"}>
                Contact
            </NavElements>
            <NavElements to={"/"}>
                Resume
            </NavElements>
        </ul>
    </nav>
)

export default NavBar;