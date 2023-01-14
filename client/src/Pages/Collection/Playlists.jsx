import React from 'react'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import EmptyField from '@/components/EmptyField'
import FavoritesCard from '@/components/FavoritesCard'
import LightBtn from '@/components/LightBtn'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import { getMobileTabletSize } from '@/utils/size'
import { addPlaylistHandle } from '@/firebase/db'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '@/Pages/Collection/Playlists.scss'

function Playlists() {
  const id = uuidv4()
  const navigate = useNavigate()
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { favorites, uid, displayName } } = useSelector(state => state.profiles)
  const size = getMobileTabletSize()

  const handleAdd = async() => {
    await addPlaylistHandle(playlists, id, uid)
    navigate(`/playlist/${id}`, { replace: true })
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