import React, { useState } from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import DefaultAvatar from '@/icons/Avatar.svg'
import Loading from '@/components/Loading'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import { Link } from 'react-router-dom'
import { modal } from '@/utils'
import { useSelector } from 'react-redux'
import '@/Pages/Profile/Profile.scss'

function Profile() {
  const { user } = useSelector(state => state.auth)
  const { playlists } = useSelector(state => state.playlist)
  const publishPlaylists = playlists.filter(playlist => playlist.publish === true)
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
      <div className='profileMain'>
        <div className="profileMain__playlists">
          <h3 className='profileMain__playlists__title'>Playlists</h3>
          <div className="profileMain__playlists__cards">
            {publishPlaylists.slice(1,7).map(playlist => (
              <PlaylistInfoCard key={playlist.id} user={user} playlist={playlist}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile