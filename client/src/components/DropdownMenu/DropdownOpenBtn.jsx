import React from 'react'

function DropdownOpenBtn({ children, className, ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export default DropdownOpenBtn