import React from 'react'
import GradientBg from '@/components/GradientBg'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import Header from '@/Pages/Album/Main/Header'
import List from '@/Pages/Album/Main/List'
import styles from '@/Pages/Album/Album.module.scss'

function Main({ findSongs, findAlbum, backgroundColor, size }) {
  return (
    <PageWrapper as='div' className={styles.content}>
      <Header size={size} album={findAlbum} songs={findSongs}/>
      <List size={size} songs={findSongs}/>
      <GradientBg bgColor={backgroundColor}/>
    </PageWrapper>
  )
}

export default Main