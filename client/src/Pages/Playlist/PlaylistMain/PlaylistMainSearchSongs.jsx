import React, { useState, useEffect } from 'react'
import Icon from '@/components/Icon'
import clsx from 'clsx'
import SongsTableList from '@/components/SongsTableList'
import SearchError from '@/components/SearchError'
import AddOrRemoveBtn from '@/Pages/Playlist/PlaylistMain/AddOrRemoveBtn'
import { useGetSearchSongsQuery } from '@/services/music'
import { useFindPlaylist } from '@/hooks/useFindPlaylist'
import { addOrRemoveAddedSongs } from '@/firebase/db'
import { useDebounceValue } from '@/hooks/useDebounceValue'
import { useSelector } from 'react-redux'

function PlaylistMainSearchSongs({ show, setShow, playlistId }) {
  const [skip, setSkip] = useState(true)//this state was used to not send request when page first render 
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounceValue(search, 600)
  const {data, isFetching, error, isSuccess} = useGetSearchSongsQuery(debouncedSearch, { skip })
  const findPlaylist = useFindPlaylist(playlistId)
  //const { user } = useSelector(state => state.auth)
  //const validPlaylist = findPlaylist?.uid === user?.uid

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setSkip(e.target.value.length > 1 ? false : true)
  }

  const addOrRemove = (song) => {
    addOrRemoveAddedSongs(playlistId, {
      id: song.key,
      track: song,
      createdAt: new Date().toISOString()
    }, findPlaylist?.addedSongs)
  }

  useEffect(() => {
      setSkip(true)
      setSearch('')
  }, [show])

  const searchSong = data?.tracks?.hits?.slice(1,11)

  return (
    <>
    {<div className=
      {clsx('playlist__main__content__searchSongs',
      show ? 'hide' : '',
      isSuccess && !isFetching && show ? 'c' : '')}  
    >
      <div className={`playlist__main__content__searchSongs__head ${show ? 'hideHead' : ''}`}>
        <div className='playlist__main__content__searchSongs__head__input'>
          <h3>Let's find something for playlist</h3>
          <label>
            <input
              value={search}
              autoComplete='off'
              type="text"
              name='search' 
              placeholder='Search for songs'
              onChange={handleSearch}
            />
            <Icon className='searchIcon' name='Search' size={20}/>
            {search.length > 1 && 
            <button 
              className='closeBtn' 
              onClick={() => {
                setSearch('')
                setSkip(true)
              }}
            >
              <Icon name='Close' size={22}/>
            </button>}
          </label>
        </div>
        <button 
          className='playlist__main__content__searchSongs__head__closeBtn'
          onClick={() => setShow(!show)}
        >
          <Icon name={show ? 'Up' : 'Close'} size={35}/>
        </button>
      </div>
        <div className={clsx('playlist__main__content__searchSongs__list', show ? 'hideSongsList' : '')}>
          {isFetching || error  && <SearchError text={search} status={error.status}/>}
          <ul className='playlist__main__content__searchSongs__list__items'>
            {isSuccess && !isFetching && searchSong.map((song,index) => (
              <li
                key={song.track.key}
                className='playlist__main__content__searchSongs__list__items__item'
              >
                <SongsTableList
                  index={index}
                  song={song.track}
                  findSongs={searchSong}
                >
                  <AddOrRemoveBtn 
                    onClick={() => addOrRemove(song.track)}
                    id={song.track.key}
                    playlistId={playlistId}
                    className='addOrRemove'
                  />
                </SongsTableList>
              </li>
            ))}
          </ul>
      </div>
    </div>}
    </>
  )
}

export default PlaylistMainSearchSongs