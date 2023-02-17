import React from 'react'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import EmptyField from '@/components/EmptyField'
import FavoritesCard from '@/components/Cards/FavoritesCard'
import PlaylistInfoCard from '@/components/Cards/PlaylistInfoCard'
import CreatePlaylistBtn from '@/components/IconButtons/CreatePlaylistBtn'
import { getBreakPoint } from '@/utils/helpers/media'
import { useSelector } from 'react-redux'
import styles from '@/Pages/Collection/Playlists/Playlists.module.scss'

function Playlists() {
  const SM = getBreakPoint('SM')
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { favorites, displayName } } = useSelector(state => state.profiles)

  const EmptyPlaylistsField = () => {
    return (
      <EmptyField icon='Music'>
        <CreatePlaylistBtn size={42}/>
      </EmptyField>
    )
  }

  const CardList = () => {
    return (
      <CardListWrapper className={styles.cards}>
        {SM && <CreatePlaylistBtn size={42}/>}
        {!SM && <FavoritesCard favorites={favorites}/>}
        {playlists.map((playlist) => (
          <PlaylistInfoCard
            key={playlist.id}
            playlist={playlist}
            userName={displayName}
          />
        ))}
      </CardListWrapper>
    )
  }

  return (
    <PageWrapper className={styles.playlists}>
      <h3>Your Playlists</h3>
      {playlists.length === 0 ? <EmptyPlaylistsField/> : <CardList/>}
    </PageWrapper>
  )
}

export default Playlists