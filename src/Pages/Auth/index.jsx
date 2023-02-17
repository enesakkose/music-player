import React, { useState } from 'react'
import Login from '@/Pages/Auth/Login' 
import Signup from '@/Pages/Auth/Signup'
import styles from '@/Pages/Auth/Auth.module.scss'

function Auth() {
  const [ changeContent, setChangeContent ] = useState(true)

  return (
    <div className={styles.auth}>
      {changeContent && <Login setChangeContent={setChangeContent}/>}
      {!changeContent && <Signup setChangeContent={setChangeContent}/>}
    </div>
  )
}

export default Auth