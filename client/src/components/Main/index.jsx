import React from 'react'
import Sidebar from '@/components/Sidebar'
import ViewLayout from '@/components/Main/View/ViewLayout'
import Home from '@/Pages/Home'
import Search from '@/Pages/Search'
import Library from '@/Pages/Library'
import Collection from '@/Pages/Collection'
import { Route, Routes } from 'react-router-dom'
import '@/components/Main/Main.scss'
import Playlist from '@/Pages/Playlist'



function Main() {
  return (
    <main className='main'>
      <Sidebar/>
      <ViewLayout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/collection' element={<Collection/>}>
            <Route path=':id' element={<Playlist/>} />
          </Route>
        </Routes>
      </ViewLayout>
    </main>
  )
}

export default Main