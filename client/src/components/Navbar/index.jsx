import React from 'react'
import MobilePlayer from '@/components/MobilePlayer'
import Navbar from '@/components/Sidebar/Navbar'
import { useSelector } from 'react-redux'
import '@/components/Navbar/Navbar.scss'

function MobileNavbar() {
  const { user } = useSelector(state => state.auth)

  return (
    <div className='navbar'>
      <MobilePlayer/>
      <Navbar user={user}/>
    </div> 
  )
}

export default MobileNavbar