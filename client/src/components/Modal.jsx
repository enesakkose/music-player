import React from 'react'
import modals from '@/modals'
import { useSelector } from 'react-redux'
import { useClickOutside } from '@/hooks/useClickOutside'
import { closeModalHandle } from '@/utils'
import '@/components/Modal.scss'

function Modal() {
  const outClickRef = useClickOutside(() => {
    closeModalHandle()
  })
  const { name, data } = useSelector(state => state.modal)
  const modal = modals.find(modal => modal.name === name)

  return (
    <div className='modal'>
      <modal.element
        data={data}
        outClickRef={outClickRef}
      />      
    </div>
  )
}

export default Modal