import React, { useState, useEffect } from 'react'
import SearchHeader from '@/Pages/Playlist/PlaylistMain/Search/Header'
import SearchResult from '@/Pages/Playlist/PlaylistMain/Search/Result'
import clsx from 'clsx'
import '@/Pages/Playlist/PlaylistMain/Search/Search.scss'

function Search({ playlist, show, setShow }) {
  const [search, setSearch] = useState('')

  useEffect(() => {
      setSearch('')
  }, [show])

  return (
    <div className={clsx('playlistSearchSongs', show ? 'hide' : '')}>
      <SearchHeader 
        show={show} 
        setShow={setShow} 
        search={search} 
        setSearch={setSearch}
      />
      <SearchResult
        playlist={playlist}
        show={show}
        search={search}
      />
    </div>
  )
}

export default Search