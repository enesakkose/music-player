import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTopChartsQuery } from '@/services/music'
import AlbumHeader from '@/Pages/Album/AlbumHeader'
import Main from '@/Pages/Album/Main'
import '@/Pages/Album/Album.scss'
import Loading from '@/components/Loading'

function Album() {
  const { data, isFetching } = useGetTopChartsQuery()

  const { id } = useParams()
  if(isFetching) return <Loading/>
  const findAlbum = data?.find(d => d.key == id)
  const findSongs = data?.filter((song) => song.subtitle === findAlbum.subtitle)

  const backgroundColor = findAlbum.images.joecolor.slice(18,24)
  return (
    <div className='album'>
      <AlbumHeader 
        findAlbum={findAlbum} 
        findSongs={findSongs} 
        backgroundColor={backgroundColor}
      />
      <Main findSongs={findSongs} backgroundColor={backgroundColor}/>
    </div>
  )
}

export default Album