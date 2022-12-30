import React from 'react'
import ProfileCard from '@/components/ProfileCard'
import CardListLayout from '@/components/CardListLayout'
import EmptyField from '@/components/EmptyField'
import '@/Pages/Search/ProfilesResult.scss'

function ProfilesResult({profiles}) {
  return (
    <>
    <CardListLayout href={false} title='Profiles' className='profilesResult'>
      {profiles.map((profile) => (
        <ProfileCard 
        key={profile.data().uid} 
        user={profile.data()} 
        />
      ))}
    </CardListLayout>
    {profiles?.length === 0 && <EmptyField icon='avatar'/>}
    </>
  )
}

export default ProfilesResult