import React from 'react'
import Sidebar from '@/components/Sidebar'
import ViewLayout from '@/components/Main/View/ViewLayout'
import Modal from '@/components/Modal'
import { routes } from '@/routes'
import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '@/components/Main/Main.scss'

function Main() {

  const { open } = useSelector(state => state.modal)

  return (
    <main className='main'>
      {open && <Modal/>}
      <Sidebar/>
      <ViewLayout>
        {useRoutes(routes)}
      </ViewLayout>
    </main>
  )
}

export default Main