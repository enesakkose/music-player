import React, { useState } from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import DefaultAvatar from '@/icons/Avatar.svg'
import Loading from '@/components/Loading'
import { Link } from 'react-router-dom'
import { modal } from '@/utils'
import { useSelector } from 'react-redux'
import '@/Pages/Profile.scss'

function Profile() {
  const { user } = useSelector(state => state.auth)
  const [ follow, setFollow ] = useState(false)
  if(user === null) return <Loading/>

  return (
    <div className='profile'>
      <PlaylistHeader 
        className='profile__header' 
        infoTitle='PROFILE' 
        infoHeader={user.displayName !== null ? user.displayName : user.email}
        img={user.photoURL === null ? DefaultAvatar : user.photoURL}
        onClick={() => modal('UserInfoModal', user)}
      >
        <div className="profile__header__follow">
          <Link to='/'>0 Followers</Link>
          <Link to='/'>0 Following</Link>
          <button 
            onClick={() => setFollow(!follow)} 
            className='followBtn'
          >
            {follow ? 'Following' : 'Follow'}
          </button>
        </div>
      </PlaylistHeader>
      <div className='profile__main'>

      </div>
    </div>
  )
}

export default Profile