import React from 'react'
import FollowBtn from '@/components/FollowBtn'
import NavigateBtn from '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns/NavigateBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { modal } from '@/utils'
import { follow, unfollow } from '@/firebase/db'
import '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns/ProfileHeaderBtns.scss'

function ProfileHeaderBtns({ profile, validProfile }) {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const { profile: currentUserProfile } = useSelector(state => state.profiles)
  const findInFollowers = profile?.follower?.find(p => p.uid === currentUserProfile.uid)

  const navigateToFollowers = () => {
    user
    ? navigate(`/profile/${profile.uid}/followers`, {state: {
      profile: profile
    }})
    : modal('UnauthModal')
  }

  const navigateToFollowing = () => {
    user
    ? navigate(`/profile/${profile.uid}/followings`, {state: {
      profile: profile
    }})
    : modal('UnauthModal')
  }

  const unFollowHandle = async() => {
    await unfollow(profile, currentUserProfile)
  }

  const followHandle = async() => {
    await follow(profile, currentUserProfile)
  }

  return (
    <div className='profileHeaderBtns'>
      <NavigateBtn 
        onClick={navigateToFollowers}
        text={`${profile.follower.length} Followers`}  
      />
      <NavigateBtn
        onClick={navigateToFollowing}
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