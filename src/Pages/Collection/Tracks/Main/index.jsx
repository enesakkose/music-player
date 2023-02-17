import React from 'react'
import List from '@/Pages/Collection/Tracks/Main/List'
import EmptyFavList from '@/Pages/Collection/Tracks/Main/EmptyFavList'
import TrackListWrapper from '@/components/Wrappers/TrackListWrapper'
import GradientBg from '@/components/GradientBg'
import { useSelector } from 'react-redux'
import styles from '@/Pages/Collection/Tracks/Tracks.module.scss'

function Main() {
  const { profile: { favorites } } = useSelector(state => state.profiles)
  const fav = favorites.length === 0

  return (
    <TrackListWrapper>
      {fav && <EmptyFavList />}
      {!fav && <List favorites={favorites} />}
      <GradientBg className={styles.favBg} />
    </TrackListWrapper>
  )
}

export default Main