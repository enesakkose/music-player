import React from 'react'
import CardListLayout from '@/components/CardListLayout'
import SongCard from '@/components/SongCard'

function Favorites({profile}) {

  return (
    <CardListLayout title='Favorites' href={`/profile/${profile.uid}/favorites`} profile={profile}>
      {profile.favorites.slice(0,5).map((song, index) => (
        <SongCard
          key={song.key} 
          song={song} 
          index={index}
          data={profile.favorites}
        />
      ))}
    </CardListLayout>
  )
}

export default Favorites