import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOpenCover } from '@/store/playlist'
import { Link } from 'react-router-dom'
import Icon from '@/components/Icon'
import '@/components/Footer/MusicInfo.scss'

function MusicInfo({current}) {
  const dispatch = useDispatch()
  const { openCover } = useSelector(state => state.playlist)
  
  
  return (
    <div className={`footer__music__info ${openCover ? 'openCover' : ''}`}>
      <div className='footer__music__info__cover'>
        <img src={current?.images?.coverart} alt={current?.title}/>
        <button 
          onClick={() => dispatch(setOpenCover(!openCover))} 
          className="expandBtn"
        >
          <Icon name='Left' size={20}/>
        </button>
      </div>
      <div className="footer__music__info__text">
        <Link 
          className='footer__music__info__text__songName' 
          to='/'
        >
          <p>{current?.title}</p>
        </Link>
        <Link
          className='footer__music__info__text__singerName' 
          to='/'
        >
          <span>{current?.subtitle}</span>
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

  )
}

export default MusicInfo