import React from 'react'
import Modal from '@/components/Modal'
import Popup from '@/components/Popup/Popup'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

function Popups() {
  const { open } = useSelector(state => state.modal)
  const { openPopup } = useSelector(state => state.popup)

  return (
    <>
      <Toaster/>
      {open && <Modal/>}
      {openPopup && <Popup/>}
    </>
  )
}

export default Popups