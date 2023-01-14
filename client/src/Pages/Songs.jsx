import React from 'react'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import SongCard from '@/components/SongCard'
import Loading from '@/components/Loading'
import { useGetChartsByGenreQuery } from '@/services/music'
import '@/Pages/Songs.scss'

function Songs() {
  const { data, isFetching, error } = useGetChartsByGenreQuery('POP')
  
  if(isFetching) return <Loading/>
  if(error) return 'Something went wrong...'
  
  return (
    <PageWrapper className='songs'>
      <h3>Top 50</h3>
      <CardListWrapper>
        {data.map((song, index) => (
          <SongCard 
            key={song.key} 
            song={song} 
            index={index}
            data={data}
          />
        ))}
      </CardListWrapper>
    </PageWrapper>
  )
}

export default Songs