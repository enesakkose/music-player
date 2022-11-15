import React from 'react'
import InfoCard from '@/Pages/Search/InfoCard'
import '@/Pages/Search/ProfilesResult.scss'

function ProfilesResult({profiles}) {
  return (
    <div className='profilesResult'>
      <h3>Profiles</h3>
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