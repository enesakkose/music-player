import React from 'react'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import SongCard from '@/components/SongCard'
import Loading from '@/components/Loading'
import { useParams } from 'react-router-dom'
import { useGetChartsByGenreQuery } from '@/services/music'
import { useDispatch } from 'react-redux'
import { GENRES } from '@/constants'
import '@/Pages/Genre.scss'

function Genre() {
  const { genre } = useParams()
  const { data, isFetching, error } = useGetChartsByGenreQuery(genre)
  const findGenres = GENRES.find(g => g.val === genre)
  //This variable created via constants.jsx for the title property which isn't in api
  
  if(isFetching) return <Loading/>
  if(error) return 'Something went wrong...'

  const genreData = data.filter(genre => genre.hub.actions)
  //This variable created cause api issues

  return (
    <PageWrapper className='genre'>
      <h2 className='genre__title'>{findGenres.genre}</h2>
      <CardListWrapper className='genre__cards'>
        {genreData.map((genreItem, index) => (
          <SongCard 
            key={genreItem.key}
            song={genreItem} 
            index={index}
            data={genreData}
          />
        ))}
      </CardListWrapper>  
    </PageWrapper>
  )
}

export default Genre