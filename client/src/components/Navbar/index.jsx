import React from 'react'
import MobilePlayer from '@/components/MobilePlayer'
import Navbar from '@/components/Sidebar/Navbar'
import { useSelector } from 'react-redux'
import '@/components/Navbar/Navbar.scss'

function MobileNavbar() {
  const { user } = useSelector(state => state.auth)
  const { current } = useSelector(state => state.player)

  return (
    <nav className='navbar'>
      {current.key && <MobilePlayer/>}
      <Navbar user={user}/>
    </nav> 
  )
}

export default MobileNavbar