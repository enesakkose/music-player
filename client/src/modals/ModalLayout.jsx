import React from 'react'
import ModalHeader from '@/components/Modal/ModalHeader'
import clsx from 'clsx'
import '@/modals/ModalLayout.scss'

function ModalLayout({ title, ref, children, className }) {
  return (
    <div ref={ref} className={clsx('modalLayout', className)}>
      <ModalHeader title={title}/>
      {children}
    </div>
  )
}

export default ModalLayout