import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOpenCover } from '@/store/playlist'
import { Link } from 'react-router-dom'
import { addFavoriteHandle } from '@/utils'
import FavoriteBtn from '@/components/FavoriteBtn'
import Icon from '@/components/Icon'
import '@/components/Footer/MusicInfo.scss'

function MusicInfo() {
  const dispatch = useDispatch()
  const { openCover, favoritesPlaylist } = useSelector(state => state.playlist)
  const { current } = useSelector(state => state.player)
  const c = favoritesPlaylist.find(f => f.key === current.key)

  const addPlaylistFooter = () => {
    addFavoriteHandle(c, current)
  }

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
          to={`/album/${current?.key}`}
        >
          <p>{current?.title}</p>
        </Link>
        <Link
          className='footer__music__info__text__singerName' 
          to={`/album/${current?.key}`}
        >
          <span>{current?.subtitle}</span>
        </Link>
      </div>
      <div className="footer__music__info__actionBtns">
        <FavoriteBtn
          onClick={addPlaylistFooter}
          thereFavPlaylist={c}
          className={`${c ? 'liked': ''}`}
        />
        <button>
          <Icon name='Nested' size={18}/>
        </button>
      </div>
    </div>
  )
}

export default MusicInfo