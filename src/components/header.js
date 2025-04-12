import React from "react"
import NavBar from "./navbar"
import * as headerStyles from './header.module.css';

const Header = () => (
  <header className={headerStyles.head}>
    <NavBar />
  </header>
)

export default Header
