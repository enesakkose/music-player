import React from 'react'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle } from '@/firebase/auth'

function GoogleBtn({ text }) {
  const navigate = useNavigate()

  const continueGoogle = async () => {
    const user = await loginWithGoogle()
    if (user) navigate('/', { replace: true })
  }

  return (
    <Button variant='google' onClick={continueGoogle}>
      <Icon name='Google' size={30} />
      {text}
    </Button>
  )
}

export default GoogleBtn