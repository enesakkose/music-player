import React from 'react'
import '@/components/FollowBtn.scss'

function FollowBtn({ statement, ...props }) {
  return (
    <button className='followBtn' {...props}>
      {statement ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default FollowBtn