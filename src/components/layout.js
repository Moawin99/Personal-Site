import React from "react"
import layoutSyles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={layoutSyles.layoutDiv}>
      {children}
    </div>
  )
}

export default Layout
