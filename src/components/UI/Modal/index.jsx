import React from 'react'
import modals from '@/modals'
import { useSelector } from 'react-redux'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import { closeModalHandle } from '@/utils/helpers'
import styles from '@/components/UI/Modal/Modal.module.scss'

function Modal() {
  const outClickRef = useClickOutside(() => {
    closeModalHandle()
  })
  const { name, data } = useSelector(state => state.modal)
  const modal = modals.find(modal => modal.name === name)

  return (
    <div className={styles.modal}>
      <modal.element data={data} outClickRef={outClickRef} />
    </div>
  )
}

export default Modal