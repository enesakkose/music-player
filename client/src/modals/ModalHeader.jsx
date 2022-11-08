import React from 'react'
import ModalCloseBtn from '@/modals/ModalCloseBtn'
import '@/modals/ModalHeader.scss'

function ModalHeader({title}) {
  return (
    <header className='modalHeader'>
      <h3 className='modalHeader__title'>
        {title}
      </h3>
      <ModalCloseBtn/>
    </header>
  )
}

export default ModalHeader