import React from 'react'
import Icon from '@/components/UI/Icon'
import NavigationButton from '@/Parts/View/Header/NavigationButton'
import UserAvatar from '@/Parts/View/Header/UserAvatar'
import SearchInput from '@/components/UI/SearchInput'
import AuthBtns from '@/Parts/View/Header/AuthBtns'
import { useLocation } from 'react-router-dom'
import styles from '@/Parts/View/Header/Header.module.scss'

function Header({ user, size }) {
  const location = useLocation()

  return (
    <header className={styles.header}>
      {size ? <Icon name='Logo' size={30} /> : <NavigationButton />}
      {!size && location.pathname === '/search' && <SearchInput />}
      {user ? <UserAvatar /> : <AuthBtns />}
    </header>
  )
}

export default Header