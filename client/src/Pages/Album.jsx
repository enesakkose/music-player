import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PlaylistHeader from '@/components/PlaylistHeader'
import PlayBtn from '@/components/PlayBtn'
import Icon from '@/components/Icon'
import { v4 as uuidv4 } from 'uuid'
import '@/Pages/Album.scss'

function Album() {
  const { id } = useParams()
  const { songs } = useSelector(state => state.song)
  const [ like, setLike ] = useState(false)/*!!*/
  const findAlbum = songs?.find(d => d.id == id)
  const findSongs = songs?.filter((song) => song.author === findAlbum.author)
  

  if(songs === null) return '...Loading'
  //componentlere ayır ve useAudioyu incele
  return (
    <div className='album'>
      <PlaylistHeader className='album__header'>
        <div className="album__header__cover cover">
          <img src={findAlbum.links.images[0].url} alt="" />
        </div>
        <div className="album__header__info info">
          <h6>SINGLE</h6>
          <h1 className="album__header__info__albumName">
            {findAlbum.name.substr(0,15)}
          </h1>
          <h6 className='album__header__info__singer'>
            {findAlbum.author.toUpperCase()} •
            <span> {findSongs.length} Songs</span> 
          </h6>
        </div>
      </PlaylistHeader>
      <main className="album__content">
        <div className="album__content__actionBtns">
          <PlayBtn className='album__content__actionBtns__play'/>
          <button onClick={() => setLike(!like)}>
            <Icon name='Favorite' size={44}/>
          </button>
        </div>
        <div className="album__content__songs">
          <div className="album__content__songs__title">
            <Icon name='Hashtag' size={20}/>
            <h4 className='album__content__songs__title__head'>
              TITLE
            </h4>
            <Icon name='Time' size={22}/>
          </div>
          <div className="album__content__songs__list">
            {findSongs.map((song, index) => (
              <div key={uuidv4()} className="album__content__songs__list__item">
                <div className='album__content__songs__list__item__indexPlay'>
                  <span className='album__content__songs__list__item__indexPlay__index'>
                    {index + 1}
                  </span>
                  <button className='album__content__songs__list__item__indexPlay__playBtn'>
                    <Icon name='Play'/>
                  </button>
                </div>
                
                <h4 className='album__content__songs__list__item__text'>
                  {song.name}
                  <span>{song.author}</span>
                </h4>
                
                <button className='album__content__songs__list__item__favBtn'>
                  <Icon name='Favorite' size={20}/>
                </button>

                <span className='album__content__songs__list__item__time'>
                  2:47
                </span>
              </div>
            ))}
          </div>
          
        </div>
        <div className="album__content__background"/>
      </main>
    </div>
  )
}

export default Album