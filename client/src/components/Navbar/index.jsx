import React from 'react'
import MobilePlayer from '@/components/MobilePlayer'
import Navbar from '@/components/Sidebar/Navbar'
import '@/components/Navbar/Navbar.scss'

function MobileNavbar() {
  return (
    <div className='navbar'>
      <MobilePlayer/>
      <Navbar/>
    </div> 
  )
}

export default MobileNavbar