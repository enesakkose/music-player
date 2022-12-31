import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import LightBtn from '@/components/LightBtn'
import { closeModalHandle, navigateAuth } from '@/utils'
import '@/modals/UnauthModal.scss'

function UnauthModal({outClickRef}) {
  return (
    <ModalWrapper ref={outClickRef} className='unauthModal'>
      <h3 className='unauthModal__title'>Enjoy your Music</h3>
      <p className="unauthModal__text">Discover new music around the world now</p>
      <div className="unauthModal__btns">
        <LightBtn 
          className='closeBtn' 
          text='Not now'
          onClick={() => closeModalHandle()}  
        />
        <LightBtn 
          text='Log in' 
          onClick={() => navigateAuth()}
        />
      </div>
    </ModalWrapper>
  )
}

export default UnauthModal