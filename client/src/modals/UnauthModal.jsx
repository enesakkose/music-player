import React from 'react'
import LightBtn from '@/components/LightBtn'
import { closeModalHandle, navigateAuth } from '@/utils'
import '@/modals/UnauthModal.scss'

function UnauthModal({outClickRef}) {
  return (
    <div ref={outClickRef} className='unauthModal'>
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
    </div>
  )
}

export default UnauthModal