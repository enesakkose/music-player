import React from 'react'
import Button from '@/components/UI/Button'
import { getCountFormat } from '@/utils/helpers/number'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { modal } from '@/utils/helpers'
import { follow, unfollow } from '@/firebase/db'
import styles from '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns/ProfileHeaderBtns.module.scss'

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

  const unFollowHandle = async () => {
    await unfollow(profile, currentUserProfile)
  }

  const followHandle = async () => {
    await follow(profile, currentUserProfile)
  }

  return (
    <div className={styles.followBtns}>
      <Button variant='underline' onClick={navigateToFollowers}>
        {getCountFormat(profile.follower.length)} Followers
      </Button>
      <Button variant='underline' onClick={navigateToFollowing}>
        {getCountFormat(profile.following.length)} Following
      </Button>
      {!validProfile && user &&
        <Button className={styles.followBtn} variant='outline' onClick={inFollowers ? unFollowHandle : followHandle}>
          {inFollowers ? 'Unfollow' : 'Follow'}
        </Button>
      }
    </div>
  )
}

export default ProfileHeaderBtns