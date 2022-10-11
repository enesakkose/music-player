import React, { useState, useMemo, useRef } from 'react'
import SongsTableHeader from '@/components/SongsTableHeader'
import Icon from '@/components/Icon'
import Loading from '@/components/Loading'
import SongsTableList from '@/components/SongsTableList'
import { useGetSearchSongsQuery } from '@/services/music'
import { debounce } from 'lodash'
import '@/Pages/Playlist/PlaylistMain.scss'

function PlaylistMain() {
  const [search, setSearch] = useState('')
  const [skip, setSkip] = useState(true)
  const [show, setShow] = useState(true)
  const {data, isFetching, error, isSuccess} = useGetSearchSongsQuery(search, { skip })

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setSkip(e.target.value.length > 1 ? false : true)
  }
  const debouncedHandleSearch = useMemo(
    () => debounce(handleSearch, 500)
  , [])

  const searchSong = data?.tracks?.hits?.slice(1,11) 
  const handleShow = () => {
    setShow(!show)
  }

  return (
    <section className={`playlist__main ${show ? 'hideContent' : ''}`}>
      <div className="playlist__main__content">
        <div className="playlist__main__content__songsList">
          button
          <SongsTableHeader/>
          songsList
        </div>
        <div 
          className=
          {`playlist__main__content__searchSongs 
          ${show ? 'hide' : ''} 
          ${isSuccess && !isFetching && show ? 'c' : ''}`}  
        >
          <div className={`playlist__main__content__searchSongs__head ${show ? 'hideHead' : ''}`}>
            <div className='playlist__main__content__searchSongs__head__input'>
              <h3>Let's find something for playlist</h3>
              <label>
                <input
                  autoComplete='off'
                  type="text"
                  name='search' 
                  placeholder='Search for songs'
                  onChange={debouncedHandleSearch}
                />
                <Icon className='searchIcon' name='Search' size={20}/>
                {search.length > 1 && 
                <button 
                  className='closeBtn' 
                  onClick={() => setSearch('')}
                >
                  <Icon name='Close' size={22}/>
                </button>}
              </label>
            </div>
            <button 
              className='playlist__main__content__searchSongs__head__closeBtn'
              onClick={handleShow}
            >
              <Icon name={show ? 'Up' : 'Close'} size={35}/>
            </button>
          </div>
          <div className={`playlist__main__content__searchSongs__list ${show ? 'hideSongsList' : ''}`}>
            {isFetching && <Loading/>}
            {error && 'Something went wrong'}
            <ul className='playlist__main__content__searchSongs__list__items'>
              {isSuccess && !isFetching && searchSong.map((song,index) => (
                <li className='playlist__main__content__searchSongs__list__items__item'>
                  <SongsTableList
                    key={song.track.key}
                    index={index}
                    song={song.track}
                    findSongs={data}
                  >
                    <button className='addPlaylist'>
                      Add
                    </button>
                  </SongsTableList>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="playlist__main__background"/>
    </section>
  )
}

export default PlaylistMain