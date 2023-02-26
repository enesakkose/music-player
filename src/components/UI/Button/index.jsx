import React from 'react'
import { Link } from 'react-router-dom'
import '@/components/UI/Button/Button.module.scss'

function Button({ children, href, ...props }) {
  if(href) return (
    <Link to={href} {...props}>
      {children}
    </Link>
  ) 
    
  return (
    <button type='button' {...props}>
      {children}
    </button>
  )
}

export default Button