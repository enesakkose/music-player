import React from 'react'
import EmptyField from '@/components/EmptyField'
import LightBtn from '@/components/LightBtn'
import Header from '@/components/Playlist/Header'
import clsx from 'clsx'
import GradientBg from '@/components/GradientBg'
import MainContent from '@/Pages/Collection/Tracks/MainContent'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '@/Pages/Collection/Tracks/Tracks.module.scss'

function Tracks() {
  const { profile: { favorites, uid, displayName } } = useSelector(state => state.profiles)

  return (
    <div className={styles.favTracks}>
      <Header
        className={styles.header}
        type='PLAYLIST'
        title='LIKED SONGS'
      >
        <div className={styles.navBtn}>
          <Link to={`/profile/${uid}`}>
            {displayName}
          </Link>
          {favorites.length > 0 && <h6>• {favorites.length} songs</h6>}
        </div>
      </Header>
      
      <div className={clsx(styles.main, 
        favorites.length === 0 ? styles.mainEmpty : '')}
      >
        {favorites.length === 0 &&
          <EmptyField icon='Music'>
            <Link to='/search'>
              <LightBtn text='Find Songs'/> 
            </Link>
          </EmptyField>}
        {favorites.length > 0 && <MainContent favorites={favorites}/>}
        <GradientBg className={styles.favBg}/>
      </div>
    </div>
  )
}

export default Tracks