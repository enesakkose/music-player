import React from 'react'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import EmptyField from '@/components/EmptyField'
import FavoritesCard from '@/components/FavoritesCard'
import LightBtn from '@/components/LightBtn'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import CreatePlaylistBtn from '@/components/CreatePlaylistBtn'
import { addPlaylist } from '@/utils/playlist'
import { getMobileTabletSize } from '@/utils/size'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '@/Pages/Collection/Playlists.scss'

function Playlists() {
  const navigate = useNavigate()
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { favorites, uid, displayName } } = useSelector(state => state.profiles)
  const size = getMobileTabletSize()

  const handleAdd = () => {
    addPlaylist(playlists, uid, navigate)
  }
  
  return (
    <PageWrapper className='playlists'>
      <h3>Your Playlists</h3>
      {playlists.length === 0 
        ? <EmptyField icon='Music'>
            <LightBtn onClick={handleAdd} text='Create Playlist'/>
          </EmptyField>  

        : <CardListWrapper className="playlists__cards">
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