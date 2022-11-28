import React from 'react'
import ModalHeader from '@/components/Modal/ModalHeader'
import Avatar from '@/components/Avatar'
import FollowBtn from '@/components/FollowBtn'
import EmptyField from '@/components/EmptyField'
import { Link } from 'react-router-dom'
import '@/modals/FollowersModal.scss'

function FollowersModal({ outClickRef, data: followers }) {

  return (
    <div ref={outClickRef} className='followersModal modalContent'>
      <ModalHeader title='Followers'/>
      <ul className="followersModal__list">
        {followers.length === 0 && <EmptyField icon='Avatar'/>}
        {followers.length > 0 && followers.map((follower) => (
          <li key={follower.uid} className='followersModal__list__item'>
            <Avatar src={follower.photoURL} size='32px'/>
            <Link to={`/profile/${follower.uid}`}>
              @{follower.displayName.replace(' ', '')}
            </Link>
            <FollowBtn/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FollowersModal