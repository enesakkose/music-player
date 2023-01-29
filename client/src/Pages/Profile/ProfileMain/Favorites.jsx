import React from 'react'
import CardListContainer from '@/components/CardListContainer'
import SongCard from '@/components/SongCard'

function Favorites({ profile }) {
  return (
    <CardListContainer title='Favorites' href={`/profile/${profile.uid}/favorites`} profile={profile}>
      {profile.favorites.slice(0, 6).map((song, index) => (
        <SongCard
          key={song.key}
          song={song}
          index={index}
          data={profile.favorites}
        />
      ))}
    </CardListContainer>
  )
}

export default Favorites