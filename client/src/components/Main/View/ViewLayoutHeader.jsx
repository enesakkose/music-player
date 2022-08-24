import React from 'react'
import NavigationButton from '@/components/Main/View/NavigationButton'
import UserAvatar from '@/components/Main/View/UserAvatar'
import '@/components/Main/View/ViewLayoutHeader.scss'

function ViewLayoutHeader() {
  return (
    <header className='viewLayoutHeader'>
        <NavigationButton/>
        <UserAvatar/>
    </header>
  )
}

export default ViewLayoutHeader