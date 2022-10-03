import React from 'react'
import Sidebar from '@/components/Sidebar'
import ViewLayout from '@/components/Main/View/ViewLayout'
import Modal from '@/components/Modal'
import FavoritePopup from '@/components/FavoritePopup'
import { routes } from '@/routes'
import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '@/components/Main/Main.scss'

function Main() {

  const { open } = useSelector(state => state.modal)
  const { favoritePopup } = useSelector(state => state.playlist)

  return (
    <main className='main'>
      {open && <Modal/>}
      <Sidebar/>
      <ViewLayout>
        {useRoutes(routes)}
      </ViewLayout>
      {favoritePopup && <FavoritePopup/>}
    </main>
  )
}

export default Main