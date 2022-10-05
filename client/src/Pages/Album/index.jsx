import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetRelatedSongsQuery } from '@/services/music'
import AlbumHeader from '@/Pages/Album/AlbumHeader'
import Main from '@/Pages/Album/Main'
import Loading from '@/components/Loading'
import '@/Pages/Album/Album.scss'


function Album() {
  const { id } = useParams()
  const { data, isFetching, error } = useGetRelatedSongsQuery(id)

  if(isFetching) return <Loading/>
  if(error) return 'Something went wrong'

  const backgroundColor = data[0]?.images?.joecolor?.slice(18,24)

  return (
    <div className='album'>
      <AlbumHeader 
        findAlbum={data[0]} 
        findSongs={data}
        backgroundColor={backgroundColor}
      />
      <Main 
        findSongs={data} 
        backgroundColor={backgroundColor}
      />
    </div>
  )
}

export default Album