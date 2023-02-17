import React from 'react'
import Loading from '@/components/UI/Loading'
import Main from '@/Pages/Genre/Main'
import { useParams } from 'react-router-dom'
import { useGetChartsByGenreQuery } from '@/services/music'
import { GENRES } from '@/utils/constants/genres'
import '@/Pages/Genre/Genre.scss'

function Genre() {
  const { genre } = useParams()
  const { data, isFetching, error } = useGetChartsByGenreQuery(genre)
  const { genre: genreName } = GENRES.find(g => g.val === genre)
  //This variable created via genres.jsx for the title property which isn't in api

  if (isFetching) return <Loading />
  if (error) return 'Something went wrong...'

  const genreData = data.filter(genre => genre.hub.actions)
  //This variable created because of api issues
  const bg = genreData[0]?.images?.joecolor?.slice(18, 24)

  return (
    <Main
      bg={bg}
      title={genreName}
      song={genreData[0]}
      songs={genreData}
    />
  )
}

export default Genre