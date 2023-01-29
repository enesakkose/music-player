import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { getMobileTabletSize } from '@/utils/size'
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
  const size = getMobileTabletSize()
  const navigate = useNavigate()

  return (
    <div className='card' {...props}>
      <div className='cardImg' style={style}>
        <div className='cardImgCont'>
          <div 
            onClick={() => size ? navigate(href) : undefined} 
            className='img'/*this div created so it can come in svg */
          >
            {children}
            {playBtn && !size && <PlayBtn
              onClick={onClick}
              playPause={playPause}
              className={clsx('cardImg__btn', className)}
            />}
          </div>
        </div>
      </div>
      <div className="cardInfo">
        <h5 onClick={size ? onClick : undefined} className='cardInfo__title'>{title}</h5>
        {!size && <span className='cardInfo__name'>{name}</span>}
      </div>
      {!size && <Link to={href} className='perde'/>}
    </div>
  )
}

export default Card