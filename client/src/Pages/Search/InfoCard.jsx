import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import { Link } from 'react-router-dom'
import '@/Pages/Search/InfoCard.scss'

function InfoCard({ className, info, data }) {
  
  return (
    <Link to={`/profile/${data.uid}`} className={clsx('infoCard', className)}>
      {data.photoURL === null && <Icon name='Avatar' />}
      {data.photoURL !== null && <img src={data.photoURL} alt='img'/> }
      <div className="infoCard__text">
        <h4 className='infoCard__text__title'>{data.displayName}</h4>
        <span className='infoCard__text__info'>{info}</span>
      </div>
    </Link>
  )
}

export default InfoCard