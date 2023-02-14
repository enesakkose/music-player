import React from 'react'
import Card from '@/components/Card'
import Avatar from '@/components/Avatar'
import { useGetProfile } from '@/utils/hooks/useGetProfile'

function ProfileCard({ userId }) {
  const profile = useGetProfile(userId)

  if (profile === null) return

  return (
    <Card
      style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      playBtn={false}
      name='Profile'
      href={`/profile/${userId}`}
      title={profile?.displayName}
    >
      <Avatar
        src={profile?.photoURL === '' ? null : profile?.photoURL}
        size='100%'
      />
    </Card>
  )
}

export default ProfileCard