import React from 'react'
import Page from '@/Pages/Profile/Slug/PageLayout'
import ProfileCard from '@/components/Cards/ProfileCard'
import { useLocation } from 'react-router-dom'

function Followers() {
  //useLocation hook used to take profile info props while navigate 
  const location = useLocation()
  const followers = location.state.profile.follower

  return (
    <>
      {followers.length > 0 &&
        <Page title='Followers'>
          {followers.map(userId => ( <ProfileCard key={userId} userId={userId}/> ))}
        </Page>
      }
    </>
  )
}

export default Followers