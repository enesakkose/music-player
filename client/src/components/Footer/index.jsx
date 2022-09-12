import React, { useState } from 'react'
import Icon from '@/components/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenCover } from '@/store/playlist'
import { Link } from 'react-router-dom'
import InputRange from 'react-input-range'
import '@/components/Footer/Footer.scss'




function Footer() {
  const dispatch = useDispatch()
  const { openCover } = useSelector(state => state.playlist)
  const [volume, setVolume] = useState(1)
  return (
    <footer className='footer'>
      <div className={`footer__music__info ${openCover ? 'openCover' : ''}`}>
        <div className='footer__music__info__cover'>
          <img src="https://i.scdn.co/image/ab67616d0000b2735ceefb72ace6475e8c0e2ce3" alt="" />
          <button 
            onClick={() => dispatch(setOpenCover(!openCover))} 
            className="expandBtn">
            <Icon name='Left' size={20}/>
          </button>
        </div>
        <div className="footer__music__info__text">
          <Link className='footer__music__info__text__songName' to='/'>
            <p>Çem Vano - Remix</p>
          </Link>
          <Link className='footer__music__info__text__singerName' to='/'>
            <span>Mikail Aslan, Alican Özbuğutu</span>
          </Link>
        </div>
        <div className="footer__music__info__actionBtns">
          <button className='favoriteBtn'>
            <Icon name='Favorite' size={21}/>
          </button>
          <button>
            <Icon name='Nested' size={18}/>
          </button>
        </div>
      </div>
      <div className="footer__music__player">
        2.bolum
      </div>
      <div className="footer__music__tool">
        <button>
          <Icon name='Microphone' size={22}/>
        </button>
        <button>
          <Icon name='Queue' size={22}/>
        </button>
        <div className="footer__music__tool__range">
          <Icon name='Mute' size={22}/>
          {/* react range */}
        </div>
      </div>
    </footer>
  )
}

export default Footer