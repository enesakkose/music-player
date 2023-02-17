import React from 'react'
import clsx from 'clsx'
import Button from '@/components/UI/Button'
import styles from '@/components/UI/DropdownMenu/DropdownOpenBtn/DropdownOpenBtn.module.scss'

function DropdownOpenBtn({ children, className, ...props }) {
  return (
    <Button className={clsx(styles.dropdownOpenBtn, className)} {...props}>
      {children}
    </Button>
  )
}

export default DropdownOpenBtn