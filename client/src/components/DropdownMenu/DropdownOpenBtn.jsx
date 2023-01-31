import React from 'react'

function DropdownOpenBtn({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default DropdownOpenBtn