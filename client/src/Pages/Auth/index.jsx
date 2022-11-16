import React, { useState } from 'react'
import Login from '@/Pages/Auth/Login' 
import Signup from '@/Pages/Auth/Signup'
import '@/Pages/Auth/Auth.scss'

function Auth() {

  const [ changeContent, setChangeContent ] = useState(true)

  return (
    <div className='auth'>
      {changeContent &&<Login 
        changeContent={changeContent} 
        setChangeContent={setChangeContent}
      />}
      {!changeContent && <Signup 
        changeContent={changeContent} 
        setChangeContent={setChangeContent}
      />}
    </div>
  )
}

export default Auth