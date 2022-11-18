import React from 'react'
import Icon from '@/components/Icon'
import { closeModalHandle } from '@/utils'
import '@/components/Modal/ModalCloseBtn.scss'

function ModalCloseBtn() {
  return (
    <button className='modalCloseBtn' onClick={() => closeModalHandle()}>
      <Icon name='Close' size={30}/>
    </button>
  )
}

export default ModalCloseBtn