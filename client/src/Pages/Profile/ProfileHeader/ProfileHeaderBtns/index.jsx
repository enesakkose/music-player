import React from 'react'
import FollowBtn from '@/components/FollowBtn'
import NavigateBtn from '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns/NavigateBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { modal } from '@/utils'
import { follow, unfollow } from '@/firebase/db'
import styles from'@/Pages/Profile/ProfileHeader/ProfileHeaderBtns/ProfileHeaderBtns.module.scss'

function ProfileHeaderBtns({ profile, validProfile }) {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const { profile: currentUserProfile } = useSelector(state => state.profiles)
  const inFollowers = user && profile?.follower?.find(p => p === currentUserProfile.uid)
  
  const navigateToFollowers = () => {
    user
      ? navigate(`/profile/${profile.uid}/followers`, {
        state: {
          profile: profile
        }
      })
      : modal('UnauthModal')
  }

  const navigateToFollowing = () => {
    user
      ? navigate(`/profile/${profile.uid}/followings`, {
        state: {
          profile: profile
        }
      })
      : modal('UnauthModal')
  }

  const unFollowHandle = async() => {
    await unfollow(profile, currentUserProfile)
  }

  const followHandle = async() => {
    await follow(profile, currentUserProfile)
  }

  return (
    <div className={styles.profileHeaderBtns}>
      <div className={styles.followBtns}>
        <NavigateBtn
          onClick={navigateToFollowers}
          text={`${profile.follower.length} Followers`}
        />
        <NavigateBtn
          onClick={navigateToFollowing}
          text={`${profile.following.length} Following`}
        />
      </div>
      {!validProfile && user &&
        <FollowBtn
          onClick={inFollowers ? unFollowHandle : followHandle}
          followers={inFollowers}
        />
      }
    </div>
  )
}

export default ProfileHeaderBtns