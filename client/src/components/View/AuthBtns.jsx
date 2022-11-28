import React from 'react'
import LightBtn from '@/components/LightBtn'
import { Link } from 'react-router-dom'
import '@/components/View/AuthBtns.scss'

function AuthBtns() {
  return (
    <div className='authBtns'>
      <Link to='/auth'>
        <LightBtn className='authBtns__signup' text='Sign up'/>
      </Link>
      <Link to='/auth'>
        <LightBtn className='authBtns__login' text='Log in'/>
      </Link>
    </div>
  )
}

export default AuthBtns