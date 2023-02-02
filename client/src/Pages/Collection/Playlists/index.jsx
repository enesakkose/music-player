import React from 'react'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import EmptyField from '@/components/EmptyField'
import FavoritesCard from '@/components/FavoritesCard'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import CreatePlaylistBtn from '@/components/CreatePlaylistBtn'
import { getMobileTabletSize } from '@/utils/size'
import { useSelector } from 'react-redux'
import styles from '@/Pages/Collection/Playlists/Playlists.module.scss'

function Playlists() {
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { favorites, displayName } } = useSelector(state => state.profiles)
  const size = getMobileTabletSize()
  
  return (
    <PageWrapper className={styles.playlists}>
      <h3>Your Playlists</h3>
      {playlists.length === 0 
        ? <EmptyField icon='Music'>
            <CreatePlaylistBtn size={42}/>
          </EmptyField>  

        : <CardListWrapper className={styles.cards}>
            {!size && <FavoritesCard favorites={favorites}/>}
            {size && <CreatePlaylistBtn size={42}/>}
            {playlists.map((playlist) => (
              <PlaylistInfoCard 
                key={playlist.id} 
                playlist={playlist} 
                userName={displayName}
              />
            ))}
          </CardListWrapper>  
      }
    </PageWrapper>
  )
}

export default Playlists