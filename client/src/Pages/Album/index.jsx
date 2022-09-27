import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTopChartsQuery } from '@/services/music'
import AlbumHeader from '@/Pages/Album/AlbumHeader'
import Main from '@/Pages/Album/Main'
import Loading from '@/components/Loading'
import '@/Pages/Album/Album.scss'


function Album() {
  const { data, isFetching, error } = useGetTopChartsQuery()

  if(isFetching) return <Loading/>
  if(error) return 'Something went wrong'

  const { id } = useParams()
  const findAlbum = data?.find(d => d.key == id)
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