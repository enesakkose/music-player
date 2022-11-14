import React from 'react'
import ModalHeader from '@/modals/ModalHeader'
import Avatar from '@/components/Avatar'
import '@/modals/FollowersModal.scss'

function FollowersModal({ outClickRef, data: followers }) {
  console.log(followers)
  return (
    <div ref={outClickRef} className='followersModal modalContent'>
      <ModalHeader title='Followers'/>
      <ul className="followersModal__list">
        {followers.map((follower) => (
          <li className='followersModal__list__item'>
            <Avatar src={follower.photoURL} size='32px'/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FollowersModal