import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import LightBtn from '@/components/LightBtn'
import { navigateAuth } from '@/utils'
import '@/modals/UnauthSongModal.scss'

function UnauthSongModal({ outClickRef, data: songData }) {
  const backgroundColor = songData?.images?.joecolor?.slice(18,24)

  return (
    <ModalWrapper 
      ref={outClickRef} 
      className='unauthSongModal' 
      style={{ backgroundColor: `#${backgroundColor}`}}
    >
      <img src={songData?.images?.coverart} alt={songData.title}/>
      <div className='unauthSongModal__info'>
        <h3>Start listening with your account</h3>
        <LightBtn 
          text='SIGN UP FREE' 
          className='unauthSongModal__info__logBtn'
          onClick={() => navigateAuth()}
        />
        <LightBtn 
          text='LOG IN ACCOUNT' 
          className='unauthSongModal__info__signBtn'
          onClick={() => navigateAuth()}
        />
      </div>
    </ModalWrapper>
  )
}

export default UnauthSongModal