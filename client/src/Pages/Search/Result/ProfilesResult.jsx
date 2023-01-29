import React from 'react'
import ProfileCard from '@/components/ProfileCard'
import CardListContainer from '@/components/CardListContainer'
import EmptyField from '@/components/EmptyField'

function ProfilesResult({ profiles }) {
  return (
    <>
      <CardListContainer href={false} title='Profiles' className='profilesResult'>
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.data().uid}
            userId={profile.data().uid}
          />
        ))}
      </CardListContainer>
      {profiles?.length === 0 && <EmptyField icon='avatar' />}
    </>
  )
}

export default ProfilesResult