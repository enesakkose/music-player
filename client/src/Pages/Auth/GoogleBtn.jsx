import React from 'react'
import Icon from '@/components/Icon'
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle } from '@/firebase/auth'

function GoogleBtn({text}) {
  const navigate = useNavigate()

  const continueGoogle = async() => {
    const user = await loginWithGoogle()
    if(user) navigate('/', { replace: true })
  }

  return (
    <button className='googleBtn' onClick={continueGoogle}>
      <Icon name='Google' size={30}/>
      <h5 className='googleBtnText'>
        {text}
      </h5>
    </button>
  )
}

export default GoogleBtn