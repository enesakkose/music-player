import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import SongsTableHeader from '@/components/SongsTableHeader'
import TrackList from '@/components/TrackList'
import Row from '@/components/TrackList/Row'

function List({favorites}) {
  return (
    <>
      <ActionBtns findSongs={favorites}/>
      <SongsTableHeader/>
      <TrackList>
        {favorites.map((favorite, index) => (
          <Row
            key={favorite.key}
            index={index}
            song={favorite}
            songs={favorites}
          />
        ))}
      </TrackList>
    </>
  )
}

export default List