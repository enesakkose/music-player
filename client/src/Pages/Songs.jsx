import React from 'react'
import SongCard from '@/components/SongCard'
import Loading from '@/components/Loading'
import { useSelector } from 'react-redux'
import { useGetTopChartsQuery } from '@/services/music'
import '@/Pages/Songs.scss'

function Songs() {
  const { data, isFetching, error } = useGetTopChartsQuery()
  const { current, isPlaying } = useSelector(state => state.player)
  if(isFetching) return <Loading/>
  if(error) return 'Something went wrong...'

  return (
    <div className='songs'>
      {data.map((song, index) => (
        <SongCard 
          key={song.key} 
          song={song} 
          current={current} 
          isPlaying={isPlaying}
          index={index}
        />
      ))}
    </div>
  )
}

export default Songs