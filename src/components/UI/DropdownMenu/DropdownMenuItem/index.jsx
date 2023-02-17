import React from 'react'
import clsx from 'clsx'
import styles from '@/components/UI/DropdownMenu/DropdownMenuItem/DropdownMenuItem.module.scss'

function DropdownMenuItem ({ text, className, ...props }) {
  return(
    <li className={clsx(styles.listItem, className)} {...props}>
      {text}
    </li>
  )
}

export default DropdownMenuItem