import React from 'react'
import InfoCard from '@/Pages/Search/InfoCard'
import EmptyField from '@/components/EmptyField'
import '@/Pages/Search/ProfilesResult.scss'

function ProfilesResult({profiles}) {
  return (
    <div className='profilesResult'>
      <h3>Profiles</h3>
      {profiles.length === 0 && <EmptyField icon='Avatar'/>}
      <div className="profilesResult__list">
        {profiles.map((profile) => (
          <InfoCard 
            key={profile.uid} 
            data={profile} 
            info='Profile'
          />
        ))}
      </div>
    </div>
  )
}

export default ProfilesResult