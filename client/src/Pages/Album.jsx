import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import data from '@/api/songs.json'
import '@/Pages/Album.scss'

function Album() {
  const { id } = useParams()
  const { songs } = useSelector(state => state.song)
  
  console.log(songs?.find(d => d.id == id))
  return (
    <div>Album</div>
  )
}

export default Album
//songs undefined dönüyor