import React from 'react'
import TrackList from '@/components/TrackList'
import Row from '@/components/TrackList/Row'
import TrackListWrapper from '@/components/Wrappers/TrackListWrapper'
import ActionBtns from '@/components/ActionBtns'
import GradientBg from '@/components/GradientBg'

function List({ songs, song, title, bg }) {
  return (
    <TrackListWrapper className='mobileGenreList'>
      <ActionBtns
        title={title}
        subtitle={song.subtitle}
        songLength={songs.length}
        findSongs={songs}
      />
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
      <GradientBg bgColor={bg}/>
    </TrackListWrapper>
  )
}

export default List