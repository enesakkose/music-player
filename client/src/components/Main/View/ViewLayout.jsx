import React, { useEffect } from 'react'
import ViewLayoutHeader from '@/components/Main/View/ViewLayoutHeader'
import { useDispatch } from 'react-redux'
import { setSongs } from '@/store/song'
import songData from '@/api/songs.json'
import '@/components/Main/View/ViewLayout.scss'


function ViewLayout({children}) {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setSongs(songData))
  }, [])

  return (
    <section className='viewLayout'>
        <ViewLayoutHeader/>
        {children}
    </section>
  )
}

export default ViewLayout