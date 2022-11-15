import React from 'react'
import InfoCard from '@/Pages/Search/InfoCard'
import EmptyModal from '@/modals/EmptyModal'
import '@/Pages/Search/ProfilesResult.scss'

function ProfilesResult({profiles}) {
  
  return (
    <div className='profilesResult'>
      <h3>Profiles</h3>
      {profiles.length === 0 && <EmptyModal icon='Avatar'/>}
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