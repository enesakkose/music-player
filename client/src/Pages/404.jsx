import React from 'react'
import BrandLogo from '@/components/BrandLogo'
import { Link } from 'react-router-dom'
import '@/Pages/404.scss'

function App404() {
  return (
    <div className='app404'>
      <BrandLogo size={55}/>
      <h2>Page Not Found</h2>
      <Link to='/' className='emptyFieldBtn'>Home</Link>
    </div>
  )
}

export default App404