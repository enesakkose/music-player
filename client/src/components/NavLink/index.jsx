import React from 'react'
import { NavLink as BaseNavLink } from 'react-router-dom'
import styles from '@/components/NavLink/NavLink.module.scss'

function NavLink({ href, children, className, activeClassName, ...props }) {
  return (
    <BaseNavLink 
      to={href} 
      className={({ isActive }) =>
        [ styles.link, className, isActive ? activeClassName : undefined ] 
        .filter(Boolean)
        .join(" ")} 
      {...props}
    >
      {children}
    </BaseNavLink>
  )
}

export default NavLink