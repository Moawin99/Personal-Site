import React from 'react';
import NavElementStyles from './NavElements.module.css';

const NavElements = (props) => (
    <li className={NavElementStyles.listItem}>
        <a href={`#${props.to}`} className={NavElementStyles.itemText}>{props.children}</a>
    </li>
)

export default NavElements;