import React from 'react'
import LightBtn from '@/components/LightBtn'
import { navigateAuth } from '@/utils'
import '@/components/View/AuthBtns.scss'

function AuthBtns() {
  return (
    <div className='authBtns'>
      <LightBtn
        className='authBtns__signup'
        text='Sign up'
        onClick={() => navigateAuth()}
      />
      <LightBtn
        className='authBtns__login'
        text='Log in'
        onClick={() => navigateAuth()}
      />
    </div>
  )
}

export default AuthBtns