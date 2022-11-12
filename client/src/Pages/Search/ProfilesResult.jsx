import React, {useEffect} from 'react'
import { profileQuery } from '@/firebase/db'
import { useSelector } from 'react-redux'
import InfoCard from '@/Pages/Search/InfoCard'
import '@/Pages/Search/ProfilesResult.scss'

function ProfilesResult({querySongs}) {
  const { profiles } = useSelector(state => state.profiles)
  useEffect(() => {
    profileQuery(querySongs)
  }, [querySongs])
  console.log(profiles)

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