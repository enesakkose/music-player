import React from 'react'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import SongCard from '@/components/SongCard'
import { useSelector } from 'react-redux'
import '@/Pages/RecentSongs.scss'

function RecentSongs() {
  const { profile: { recentSongs } } = useSelector(state => state.profiles)  

  return (
    <PageWrapper className='recentSongs'>
      <CardListWrapper className="recentSongs__list">
        {recentSongs.map((song, index) =>(
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