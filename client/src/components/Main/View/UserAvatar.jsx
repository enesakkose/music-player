import React from 'react'
import '@/components/Main/View/UserAvatar.scss'
import Icon from '@/components/Icon'

function UserAvatar() {
  return (
    <button className='userAvatar'>
        <Icon name='Avatar' size={28} style={{ color: 'gray'}}/>
        <span>Aaa</span>
        <Icon name='Down'/>
    </button>
  )
}

export default UserAvatar