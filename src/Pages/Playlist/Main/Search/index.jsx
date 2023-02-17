import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import SearchHeader from '@/Pages/Playlist/Main/Search/Header'
import SearchResult from '@/Pages/Playlist/Main/Search/Result'
import styles from '@/Pages/Playlist/Main/Search/Search.module.scss'

function Search({ playlist, show, setShow }) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    setSearch('')
  }, [show])

  return (
    <div className={clsx(styles.searchContainer, show ? styles.hide : '')}>
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