import React from 'react'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import SongCard from '@/components/Cards/SongCard'
import { useSelector } from 'react-redux'

function RecentSongs() {
  const { profile: { recentSongs } } = useSelector(state => state.profiles)

  return (
    <PageWrapper className='recentSongs'>
      <h3>Recent Songs</h3>
      <CardListWrapper>
        {recentSongs.map((song, index) => (
          <SongCard
            key={song.key}
            song={song}
            index={index}
            data={recentSongs}
          />
        ))}
      </CardListWrapper>
    </PageWrapper>
  )
}

export default RecentSongs