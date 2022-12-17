import React from 'react'
import Page from '@/Pages/Profile/Slug/PageLayout'
import ProfileCard from '@/components/ProfileCard'
import { useLocation } from 'react-router-dom'

function Following() {
  //useLocation hook used to take profile info props while navigate 
  const location = useLocation()
  const followings = location.state.profile.following

  return (
    <>
      {followings.length > 0 &&
        <Page title='Followings'>
          {followings.map(user => (
            <ProfileCard key={user.uid} user={user}/>
          ))}
        </Page>
      }
    </>
  )
}

export default Following