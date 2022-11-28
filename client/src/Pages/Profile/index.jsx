import React, { useState, useEffect } from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import DefaultAvatar from '@/icons/Avatar.svg'
import Loading from '@/components/Loading'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import FollowBtn from '@/components/FollowBtn'
import { Link } from 'react-router-dom'
import { modal } from '@/utils'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { profileQuery, followOrUnfollow } from '@/firebase/db'
import '@/Pages/Profile/Profile.scss'

function Profile() {
  const { id } = useParams()
  const { profiles } = useSelector(state => state.profiles) 
  const { user } = useSelector(state => state.auth)
  if(profiles === null) return <Loading/>
  
  useEffect(() => {
    const profileQ = async() => {
      await profileQuery(false, id)
    }
    profileQ()
    console.log('id değişti')
  }, [id])
      console.log(profiles, id)

  const openFollowersModal = () => {
    modal('FollowersModal', profiles[0].follower)
  }

  const openFollowingModal = () => {
    modal('FollowersModal', profiles[0].following)
  }
  
  const follow = async() => {
    await followOrUnfollow(profiles, user)
  }
  
  const findInFollowers = profiles[0].follower.find(profile => profile.uid === user.uid)
  const validProfile = profiles[0]?.uid === user.uid

  return (
    <div className='profile'>
      {/*<PlaylistHeader 
        className='profile__header' 
        infoTitle='PROFILE' 
        infoHeader={profiles[0].displayName}
        img={profiles[0].photoURL === null ? DefaultAvatar : profiles[0].photoURL}
        onClick={validProfile ? () => modal('UserInfoModal', user) : undefined}
        validProfile={validProfile}
      >
        <div className="profile__header__follow">
          <button
            className='openFollowModal'
            onClick={openFollowersModal}
          >
            {profiles[0].follower.length} Followers
          </button>
          <button
            className='openFollowModal'
            onClick={openFollowingModal}
          >
            {profiles[0].following.length} Following
          </button>
          {!validProfile && <FollowBtn onClick={follow} statement={findInFollowers}/>}
        </div>
  </PlaylistHeader>*/}
      {/*<div className='profileMain'>
        <div className="profileMain__playlists">
          <h3 className='profileMain__playlists__title'>Playlists</h3>
          <div className="profileMain__playlists__cards">
            {publishPlaylists.slice(0,6).map(playlist => (
              <PlaylistInfoCard key={playlist.id} user={user} playlist={playlist}/>
            ))}
          </div>
        </div>
      </div>*/}
    </div>
  )
}

export default Profile