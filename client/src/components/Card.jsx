import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import '@/components/Card.scss'

function Card({ 
  style = null,
  name, 
  title, 
  href, 
  playBtn= true, 
  playPause,
  onClick, 
  className,
  children, 
  ...props }) {
  return (
    <div className='card' {...props}>
      <div className='cardImg' style={style}>
        <div className='cardImgCont'>
        <div className='img'>{/*this div created so it can come in svg  */}
          {children}
          {playBtn && <PlayBtn
            onClick={onClick}
            playPause={playPause}
            className={clsx('cardImg__btn', className)}
          />}
        </div>
        </div>
      </div>
      <div className="cardInfo">
        <h5 className='cardInfo__title'>{title}</h5>
        <span className='cardInfo__name'>{name}</span>
      </div>
      <Link to={href} className='perde'/>
    </div>
  )
}

export default Card