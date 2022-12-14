import React from 'react'
import SongCard from '@/components/SongCard'
import Loading from '@/components/Loading'
import EmptyField from '@/components/EmptyField'
import { useSelector } from 'react-redux'
import '@/Pages/RecentSongs.scss'

function RecentSongs() {
  const { profile: { recentSongs } } = useSelector(state => state.profiles)  

  return (
    <div className='recentSongs'>
      <div className="recentSongs__list">
        {recentSongs.map((song, index) =>(
          <SongCard
            key={song.key} 
            song={song} 
            index={index}
            data={recentSongs}
          />
        ))}
      </div>
    </div>
  )
}

export default RecentSongs