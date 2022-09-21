import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AlbumHeader from '@/Pages/Album/AlbumHeader'
import Main from '@/Pages/Album/Main'
import '@/Pages/Album/Album.scss'

function Album() {
  
  const { id } = useParams()
  const { songs } = useSelector(state => state.song)
  const findAlbum = songs?.find(d => d.id == id)
  const findSongs = songs?.filter((song) => song.author === findAlbum.author)

  if(songs === null) return '...Loading'

  return (
    <div className='album'>
      <AlbumHeader findAlbum={findAlbum} findSongs={findSongs}/>
      <Main findSongs={findSongs}/>
    </div>
  )
}

export default Album