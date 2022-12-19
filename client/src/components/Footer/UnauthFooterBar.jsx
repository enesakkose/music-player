import React from 'react'
import LightBtn from '@/components/LightBtn'
import { Link } from 'react-router-dom'
import '@/components/Footer/UnauthFooterBar.scss'

function UnauthFooterBar() {
  return (
    <div className='unauthFooterBar'>
      <p className='unauthFooterBar__text'>
        Sign up to get unlimited songs and discover new music around the world.
      </p>
      <Link to='/auth'>
        <LightBtn text='Sign up free'/>
      </Link>
    </div>
  )
}

export default UnauthFooterBar