import React from 'react'
import LightBtn from '@/components/LightBtn'
import '@/components/Footer/UnauthFooterBar.scss'

function UnauthFooterBar() {
  return (
    <div className='unauthFooterBar'>
      <p className='unauthFooterBar__text'>
        Sign up to get unlimited songs and discover new music around the world.
      </p>
      <LightBtn text='Sign up free'/>
    </div>
  )
}

export default UnauthFooterBar