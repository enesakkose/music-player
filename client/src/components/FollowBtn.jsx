import React from 'react'
import '@/components/FollowBtn.scss'

function FollowBtn({ statement, onClick }) {
  return (
    <button onClick={onClick} className='followBtn'>
      {statement ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default FollowBtn