import React from 'react'
import clsx from 'clsx'
import styles from '@/components/DropdownMenu/DropdownMenuItem/DropdownMenuItem.module.scss'

function DropdownMenuItem ({ text, className, setOpenDropdownMenu, ...props }) {

  return(
    <li onClick={() => setOpenDropdownMenu(false)} className={clsx(styles.listItem, className)} {...props}>
        {text}
    </li>
  )
}

export default DropdownMenuItem