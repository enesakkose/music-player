import React from 'react'
import Icon from '@/components/Icon'
import { Link } from 'react-router-dom'
import { useGetTime } from '@/hooks/useTimeConvert'
import '@/modals/Comment.scss'



function Comment({comment}) {
  const time = useGetTime(comment.createdAt)
  return (
    <div className='comment'>
      {comment.photoURL === null && <Icon name='Avatar' size={26}/>}
      {comment.photoURL !== null && 
        <img className='comment__avatar' src={comment.photoURL} alt="img"/>
      }
      <div className="comment__text">
        <div className='comment__text__title'>
          <Link to={`profile/${comment.uid}`}>@{comment.displayName}</Link>
          <span>{time}</span>
        </div>
        <p className='comment__text__content'>{comment.comment}</p>
      </div>
    </div>
  )
}

export default Comment