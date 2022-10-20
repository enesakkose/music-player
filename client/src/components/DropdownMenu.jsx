import React from 'react'
import clsx from 'clsx'
import '@/components/DropdownMenu.scss'

function DropdownMenu({ children, className }) {
  return (
    <div className={clsx('dropdownMenu', className)}>
      {children}
    </div>
  )
}

export default DropdownMenu