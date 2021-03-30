import React, { useEffect } from "react"
import layoutSyles from './layout.module.css';

const Layout = ({ children }) => {
  useEffect(() => {
    document.title = "Mark Moawad"
  }, [])
  return (
    <div className={layoutSyles.layoutDiv}>
      {children}
    </div>
  )
}

export default Layout
