import React from 'react'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle } from '@/firebase/auth'
import styles from '@/components/IconButtons/GoogleBtn/GoogleBtn.module.scss'

function GoogleBtn({ text }) {
  const navigate = useNavigate()

  const continueGoogle = async () => {
    const user = await loginWithGoogle()
    if (user) navigate('/', { replace: true })
  }

  return (
    <Button variant='outline' className={styles.googleBtn} onClick={continueGoogle}>
      <Icon name='Google' size={30} />
      <h5 className={styles.text}>
        {text}
      </h5>
    </Button>
  )
}

export default GoogleBtn