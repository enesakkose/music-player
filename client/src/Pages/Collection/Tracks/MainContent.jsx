import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import SongsTableHeader from '@/components/SongsTableHeader'
import TrackList from '@/components/TrackList'
import Row from '@/components/TrackList/Row'
import PlaylistWrapper from '@/components/Wrappers/PlaylistWrapper'

function MainContent({favorites}) {
  return (
    <PlaylistWrapper>
      <ActionBtns findSongs={favorites} />
        <SongsTableHeader />
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
    </PlaylistWrapper>
  )
}

export default MainContent