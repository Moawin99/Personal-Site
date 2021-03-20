import {Link, animateScroll as scroll} from 'react-scroll'
import React from 'react';
import NavElementStyles from './NavElements.module.css';

const NavElements = (props) => (
    <li className={NavElementStyles.listItem}>
        <Link className={NavElementStyles.itemText} to={props.to}>{props.children}</Link>
    </li>
)

export default NavElements;