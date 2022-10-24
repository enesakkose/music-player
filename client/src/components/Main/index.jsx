import React from 'react'
import Sidebar from '@/components/Sidebar'
import ViewLayout from '@/components/Main/View/ViewLayout'
import Modal from '@/components/Modal'
import Popup from '@/components/Popup/Popup'
import { routes } from '@/routes'
import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '@/components/Main/Main.scss'

function Main() {

  const { open } = useSelector(state => state.modal)
  const { openPopup } = useSelector(state => state.popup)

  return (
    <main className='main'>
      {open && <Modal/>}
      <Sidebar/>
      <ViewLayout>
        {useRoutes(routes)}
      </ViewLayout>
      {openPopup && <Popup/>}
    </main>
  )
}

export default Main