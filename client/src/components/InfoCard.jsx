import React from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import '@/components/InfoCard.scss'

function InfoCard() {
  return (
    <div className='infoCard'>
        <div className="infoCard__img">
            <Icon name='Music' size={52}/>
            <PlayBtn className='infoCard__img__btn'/>
        </div>
        <div className="infoCard__info">
            <h4>My Playlist #1</h4>
            <span>By Aaa(username)</span>
        </div>
    </div>
  )
}

export default InfoCard