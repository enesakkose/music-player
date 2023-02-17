import React, { forwardRef } from 'react'
import clsx from 'clsx'
import styles from '@/components/Wrappers/ModalWrapper/ModalWrapper.module.scss'

const ModalWrapper = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={clsx(styles.modalWrapper, className)} >
      {children}
    </div>
  )
})

export default ModalWrapper