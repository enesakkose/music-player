import React from 'react'
import Modal from '@/components/Modal'
import Popup from '@/components/Popup'
import { useSelector } from 'react-redux'

function Popups() {
  const { open } = useSelector(state => state.modal)
  const { openPopup } = useSelector(state => state.popup)

  return (
    <>
      {open && <Modal/>}
      {openPopup && <Popup/>}
    </>
  )
}

export default Popups