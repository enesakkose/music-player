import React from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import { Link } from 'react-router-dom'
import '@/components/InfoCard.scss'

function InfoCard({playlist}) {
  
  return (
    <div className='infoCard'>
        <div className="infoCard__img">
            <Icon name='Music' size={52}/>
            <PlayBtn className='infoCard__img__btn'/>
        </div>
        <div className="infoCard__info">
            <h4>{playlist.name}</h4>
            <span>By Aaa(username)</span>
        </div>
        <Link to={`/playlist/${playlist.id}`} className='perde'></Link>
    </div>
  )
}
export default InfoCard

//! A "perde" ELEMENT USED TO PREVENT THE PLAY BUTTON FROM BEING AFFECTED BY THE PUBLIC LINK
