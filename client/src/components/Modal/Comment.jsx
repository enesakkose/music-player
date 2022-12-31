import React from 'react'
import Avatar from '@/components/Avatar'
import { useNavigate } from 'react-router-dom'
import { useGetTime } from '@/hooks/useTimeConvert'
import { closeModalHandle } from '@/utils'
import { useGetProfile } from '@/hooks/useGetProfile'
import '@/components/Modal/Comment.scss'

function Comment({comment}) {
  const navigate = useNavigate()
  const time = useGetTime(comment.createdAt)
  const profile = useGetProfile(comment.uid)
  
  if(profile === null) return

  const commentNavBtn = () => {
    navigate(`profile/${comment.uid}`)
    closeModalHandle()
  }

  return (
    <div className='comment'>
      <Avatar src={profile?.photoURL} size='32px'/>
      <div className="comment__text">
        <div className='comment__text__title'>
          <button className='navBtn' onClick={commentNavBtn}>
            {profile?.displayName}
          </button>
          <span>• {time}</span>
        </div>
        <p className='comment__text__content'>{comment.comment}</p>
      </div>
    </div>
  )
}

export default Comment