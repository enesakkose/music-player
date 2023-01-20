import React from 'react'
import TrackList from '@/components/TrackList'
import SongsTableHeader from '@/components/SongsTableHeader'
import Row from '@/components/TrackList/Row'
import TrackListWrapper from '@/components/Wrappers/TrackListWrapper'
import ActionBtns from '@/components/ActionBtns'
import GradientBg from '@/components/GradientBg'
import { getMobileTabletSize } from '@/utils/size'

function List({ songs, song, title, bg }) {
  const size = getMobileTabletSize()

  return (
    <TrackListWrapper className='mobileGenreList'>
      <ActionBtns
        title={title}
        subtitle={song.subtitle}
        songLength={songs.length}
        findSongs={songs}
        />
      {!size && <SongsTableHeader/>}
      <TrackList>
        {songs.map((song, index) => (
          <Row
            song={song}
            songs={songs}
            index={index}
            key={song.key}
          />
        ))}
      </TrackList>
      <GradientBg bgColor={bg} />
    </TrackListWrapper>
  )
}

export default List