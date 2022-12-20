import React, { forwardRef } from 'react'
import clsx from 'clsx'
import '@/components/Wrappers/ModalWrapper.scss'

const ModalWrapper = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={clsx('modalWrapper', className)} >
      {children}
    </div>
  )
})

export default ModalWrapper