import React from 'react'
import BrandLogo from '@/components/BrandLogo'
import LightBtn from '@/components/LightBtn'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import styles from '@/Pages/404/404.module.scss'

function App404({errorMessage = 'Page Not Found', children, className}) {
  const navigate = useNavigate()
  
  const refreshPage = () => {
    navigate('/', {replace: true})
    window.location.reload()
  }
  
  return (
    <div className={clsx(styles.app404, className)}>
      <BrandLogo size={55}/>
      <h2>{errorMessage}</h2>
      <LightBtn text='Home' onClick={refreshPage}/>
      {children}
    </div>
  )
}

export default App404