import React from 'react'
import clsx from 'clsx'
import Form from '@/Pages/Playlist/PlaylistMain/Search/Header/Form'
import CloseBtn from '@/Pages/Playlist/PlaylistMain/Search/Header/CloseBtn'
import '@/Pages/Playlist/PlaylistMain/Search/Header/Header.scss'

function Header({ show, setShow, search, setSearch, setSkip }) {
  return (
    <div className={clsx('searchHeader', show ? 'hideHeader' : '')}>
      <Form search={search} setSearch={setSearch} setSkip={setSkip}/>
      <CloseBtn show={show} setShow={setShow}/>
    </div>
  )
}

export default Header