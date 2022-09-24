import React, { useState } from 'react'
import Login from '@/Pages/Auth/Login' 
import Signup from '@/Pages/Auth/Signup'
import { Toaster } from 'react-hot-toast'
import '@/Pages/Auth/Auth.scss'

function Auth() {

  const [ changeContent, setChangeContent ] = useState(false)

  return (
    <div className='auth'>
      <Toaster/>
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