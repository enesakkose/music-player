import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import styles from '@/components/Button/Button.module.scss'

function Button({ children, className, variant, href, ...props }) {
  if(href) return (
    <Link to={href} className={clsx(styles.button, styles[variant], className)} {...props}>
      {children}
    </Link>
  ) 
    
  return (
    <button type='button' className={clsx(styles.button, styles[variant], className)} {...props}>
      {children}
    </button>
  )
}

export default Button