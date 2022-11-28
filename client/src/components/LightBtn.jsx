import React from 'react'
import clsx from 'clsx'
import '@/components/LightBtn.scss'

function LightBtn({text, className, ...props}) {
  return (
    <button {...props} className={clsx('lightBtn', className)}>
      {text}
    </button>
  )
}

export default LightBtn