import React from 'react'
import styles from '@/components/Button.module.scss'

function Button({ children, disabled, Component, ...props }) {
  return (
    <button disabled={disabled} {...props}>
      {children}
      {Component}
    </button>
  )
}

export default Button