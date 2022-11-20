import React from 'react'
import BrandLogo from '@/components/BrandLogo'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import '@/Pages/404.scss'

function App404({errorMessage = 'Page Not Found', children, className}) {
  return (
    <div className={clsx('app404', className)}>
      <BrandLogo size={55}/>
      <h2>{errorMessage}</h2>
      <Link to='/' className='emptyFieldBtn'>Home</Link>
      {children}
    </div>
  )
}

export default App404