import React from 'react'
import ProfileCard from '@/components/ProfileCard'
import '@/Pages/Profile/ProfileFollowers/ProfileFollowers.scss'

function ProfileFollowers({ users, title }) {
  return (
    <div className='profileFollowers'>
      <h3 className='profileFollowers__title'>{title}</h3>
      <div className="profileFollowers__list">
        {users.map(user => (
          <ProfileCard key={user.uid} user={user}/>
        ))}
      </div>
    </div>
  )
}

export default ProfileFollowers