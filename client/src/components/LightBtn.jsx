import React from 'react'
import clsx from 'clsx'
import Button from '@/components/Button'
import '@/components/LightBtn.scss'

function LightBtn({text, className, ...props}) {
  return (
    <Button {...props} className={clsx('lightBtn', className)}>
      {text}
    </Button>
  )
}

export default LightBtn