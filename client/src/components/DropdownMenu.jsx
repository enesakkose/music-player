import React from 'react'
import '@/components/DropdownMenu.scss'

function DropdownMenu({ children, className }) {
  return (
    <div className={`dropdownMenu ${className}`}>
        {children}
    </div>
  )
}

export default DropdownMenu