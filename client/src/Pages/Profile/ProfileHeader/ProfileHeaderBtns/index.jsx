import React from 'react'
import FollowBtn from '@/components/FollowBtn'
import FollowModalBtn from '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns/FollowModalBtn'
import { modal } from '@/utils'
import { follow, unfollow } from '@/firebase/db'
import '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns/ProfileHeaderBtns.scss'

function ProfileHeaderBtns({ profile, validProfile, user }) {
  const findInFollowers = profile?.follower?.find(p => p.uid === user.uid)

  const openFollowersModal = () => {
    user
    ? modal('FollowersModal', profile.follower)
    : modal('UnauthModal')
  }

  const openFollowingModal = () => {
    user
    ? modal('FollowersModal', profile.following)
    : modal('UnauthModal')
  }

  const unFollowHandle = async() => {
    await unfollow(profile, user)
  }

  const followHandle = async() => {
    await follow(profile, user)
  }

  return (
    <div className='profileHeaderBtns'>
      <FollowModalBtn 
        onClick={openFollowersModal}
        text={`${profile.follower.length} Followers`}  
      />
      <FollowModalBtn
        onClick={openFollowingModal}
        text={`${profile.following.length} Following`}
      />
      {!validProfile && user && 
        <FollowBtn 
          onClick={findInFollowers ? unFollowHandle : followHandle} 
          statement={findInFollowers}
        />
      }
    </div>
  )
}

export default ProfileHeaderBtns