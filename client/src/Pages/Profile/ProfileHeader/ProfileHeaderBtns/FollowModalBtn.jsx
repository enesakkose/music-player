import React from 'react'
import '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns/FollowModalBtn.scss'

function FollowModalBtn({ text, ...props }) {
  return (
    <button className='followModalBtn' {...props}>
      {text}
    </button>
  )
}

export default FollowModalBtn