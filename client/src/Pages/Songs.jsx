import React from 'react'
import SongCard from '@/components/SongCard'
import Loading from '@/components/Loading'
import { useGetChartsByGenreQuery } from '@/services/music'
import '@/Pages/Songs.scss'

function Songs() {

  const { data, isFetching, error } = useGetChartsByGenreQuery('POP')
  
  if(isFetching) return <Loading/>
  if(error) return 'Something went wrong...'
  
  return (
    <div className='songs'>
      <h3 className='songs__title'>Top 50</h3>
      <div className='songs__cards'>
        {data.map((song, index) => (
          <SongCard 
            key={song.key} 
            song={song} 
            index={index}
            data={data}
          />
        ))}
      </div>
    </div>
  )
}

export default Songs