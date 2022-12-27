import React from 'react'
import Card from '@/components/Card'
import Avatar from '@/components/Avatar'

function ProfileCard({user}) {
  return (
    <Card
      style={{backgroundColor: 'transparent', boxShadow: 'none'}}
      playBtn={false}
      name='Profile'
      href={`/profile/${user.uid}`}
      title={user.displayName}
    >
      <Avatar 
        src={user.photoURL === '' ? null : user.photoURL} 
        size='100%'
      />
    </Card>
  )
}

export default ProfileCard