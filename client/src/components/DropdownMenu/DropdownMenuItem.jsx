import React from 'react'

function DropdownMenuItem ({text, ...props}) {
  return(
    <li style={{ fontSize: '.875rem' }} {...props}>
      {text}
    </li>
  )
}

export default DropdownMenuItem