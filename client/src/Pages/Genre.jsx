import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetChartsByGenreQuery } from '@/services/music'
import { useDispatch } from 'react-redux'
import { setGenre } from '@/store/song'
import { GENRES } from '@/constants'
import SongCard from '@/components/SongCard'
import Loading from '@/components/Loading'
import '@/Pages/Genre.scss'

function Genre() {
  const dispatch = useDispatch()
  const { genre } = useParams()
  const { data, isFetching, error } = useGetChartsByGenreQuery(genre)
  const findGenres = GENRES.find(g => g.val === genre)
  //This variable created via constants.jsx for the title property which isn't in api

  useEffect(() => {
    dispatch(setGenre(genre))
  }, [genre])
  
  if(isFetching) return <Loading/>
  if(error) return 'Something went wrong...'

  const genreData = data.filter(genre => genre.hub.actions)
  //This variable created cause api issues

  return (
    <section className='genre'>
      <h2 className='genre__title'>{findGenres.genre}</h2>
      <div className='genre__cards'>
        {genreData.map((genreItem, index) => (
          <SongCard 
            key={genreItem.key}
            song={genreItem} 
            index={index}
            data={genreData}
          />
        ))}
      </div>  
    </section>
  )
}

export default Genre