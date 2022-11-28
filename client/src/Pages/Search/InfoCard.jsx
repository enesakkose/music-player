import React from 'react'
import clsx from 'clsx'
import Avatar from '@/components/Avatar'
import { Link } from 'react-router-dom'
import '@/Pages/Search/InfoCard.scss'

function InfoCard({ className, info, data }) {
  
  return (
    <Link to={`/profile/${data.uid}`} className={clsx('infoCard', className)}>
      <Avatar src={data.photoURL} size='100%'/>
      <div className="infoCard__text">
        <h4 className='infoCard__text__title'>{data.displayName}</h4>
        <span className='infoCard__text__info'>{info}</span>
      </div>
    </Link>
  )
}

export default InfoCard