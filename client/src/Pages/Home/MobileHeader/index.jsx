import React, { useState } from 'react'
import Icon from '@/components/Icon'
import Menu from '@/Pages/Home/MobileHeader/Menu'
import '@/Pages/Home/MobileHeader/MobileHeader.scss'

function MobileHeader({profile}) {
  const [ openMenu, setOpenMenu ] = useState(false)

  return (
    <>
    <header className='mobileHeader'>
      <Icon name='Logo' size={30}/>
      <button onClick={() => setOpenMenu(true)}>
        <Icon name='Double' size={30}/>
      </button> 
    </header>
    <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} profile={profile}/>
    </>
  )
}

export default MobileHeader