import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetTopChartsQuery } from '@/services/music'
import { useGetChartsByGenreQuery } from '@/services/music'
import { useSelector } from 'react-redux'
import AlbumHeader from '@/Pages/Album/AlbumHeader'
import Main from '@/Pages/Album/Main'
import Loading from '@/components/Loading'
import '@/Pages/Album/Album.scss'


function Album() {
  const { genre } = useSelector(state => state.song)
  const { data, isFetching, error } = useGetChartsByGenreQuery(genre)

  if(isFetching) return <Loading/>
  if(error) return 'Something went wrong'

  const { id } = useParams()
  const findAlbum = data?.find(d => d.key === id)
  const findSongs = data?.filter((song) => song.subtitle === findAlbum.subtitle)
  const backgroundColor = findAlbum?.images?.joecolor.slice(18,24)

  return (
    <div className='album'>
      <AlbumHeader 
        findAlbum={findAlbum} 
        findSongs={findSongs} 
        backgroundColor={backgroundColor}
      />
      <Main 
        findSongs={findSongs} 
        backgroundColor={backgroundColor}
      />
    </div>
  )
}

export default Album