import React, { useState, useEffect } from 'react'
import SearchHeader from '@/Pages/Playlist/PlaylistMain/Search/Header'
import SearchResult from '@/Pages/Playlist/PlaylistMain/Search/Result'
import clsx from 'clsx'
import '@/Pages/Playlist/PlaylistMain/Search/Search.scss'

function Search({ playlist, show, setShow }) {
  //this state was used to not send request when page first render 
  const [skip, setSkip] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
      setSkip(true)
      setSearch('')
  }, [show])

  return (
    <div className={clsx('playlistSearchSongs', show ? 'hide' : '',)}>
      <SearchHeader 
        show={show} 
        setShow={setShow} 
        search={search} 
        setSearch={setSearch} 
        setSkip={setSkip}
      />
      <SearchResult
        playlist={playlist}
        show={show}
        search={search}
        skip={skip}
      />
    </div>
  )
}

export default Search