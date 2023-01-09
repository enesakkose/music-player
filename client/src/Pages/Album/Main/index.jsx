import React from 'react'
import GradientBg from '@/components/GradientBg'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import ActionBtns from '@/components/ActionBtns'
import List from '@/Pages/Album/Main/List'
import styles from '@/Pages/Album/Album.module.scss'

function Main({ findSongs, findAlbum, backgroundColor, size }) {
  return (
    <PageWrapper as='div' className={styles.content}>
      <ActionBtns
        title={findAlbum.title}
        subtitle={findAlbum.subtitle} 
        songLength={findSongs.length} 
        findSongs={findSongs}
      />
      <List size={size} songs={findSongs}/>
      <GradientBg bgColor={backgroundColor}/>
    </PageWrapper>
  )
}

export default Main