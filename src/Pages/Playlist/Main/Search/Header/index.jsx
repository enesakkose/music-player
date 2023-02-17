import React from 'react'
import clsx from 'clsx'
import Form from '@/Pages/Playlist/Main/Search/Header/Form'
import CloseBtn from '@/components/IconButtons/CloseBtn'
import styles from '@/Pages/Playlist/Main/Search/Header/Header.module.scss'

function Header({ show, setShow, search, setSearch }) {
  const closeBtnHandle = () => {
    setShow(prev => !prev)
  }

  return (
    <div className={clsx(styles.searchHeader, show ? styles.hideHeader : '')}>
      <Form search={search} setSearch={setSearch} />
      <CloseBtn size={35} name={show ? 'Up' : 'Close'} onClick={closeBtnHandle} />
    </div>
  )
}

export default Header