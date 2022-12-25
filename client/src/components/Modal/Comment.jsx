import React from 'react'
import Icon from '@/components/Icon'
import Avatar from '@/components/Avatar'
import { Link } from 'react-router-dom'
import { useGetTime } from '@/hooks/useTimeConvert'
import { useGetProfile } from '@/hooks/useGetProfile'
import MyLoader from '@/components/Modal/Skeleton'
import '@/components/Modal/Comment.scss'

function Comment({comment}) {
  const time = useGetTime(comment.createdAt)
  const profile = useGetProfile(comment.uid)
  
  if(profile === null) return

  return (
    <div className='comment'>
      
        <Avatar src={profile?.photoURL} size='32px'/>
        <div className="comment__text">
          <div className='comment__text__title'>
            <Link to={`profile/${comment.uid}`}>@{profile?.displayName}</Link>
            <span>{time}</span>
          </div>
          <p className='comment__text__content'>{comment.comment}</p>
        </div>
      

    </div>
  )
}

export default Comment