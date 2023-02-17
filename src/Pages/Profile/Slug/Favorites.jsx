import React from 'react'
import Page from '@/Pages/Profile/Slug/PageLayout'
import SongCard from '@/components/Cards/SongCard'
import { useLocation } from 'react-router-dom'

function Favorites() {
  //useLocation hook used to take favorites props while navigate 
  const location = useLocation()
  const favorites = location.state.profile.favorites

  return (
    <>
      {favorites.length > 0 &&
        <Page title='Favorites'>
          {favorites.map((song, index) => (
            <SongCard
              key={song.key}
              song={song}
              index={index}
              data={favorites}
            />
          ))}
        </Page>
      }
    </>
  )
}

export default Favorites