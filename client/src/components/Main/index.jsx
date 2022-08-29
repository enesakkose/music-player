import React from 'react'
import Sidebar from '@/components/Sidebar'
import ViewLayout from '@/components/Main/View/ViewLayout'
import routes from '@/routes'
import { useRoutes } from 'react-router-dom'
import '@/components/Main/Main.scss'

function Main() {
  return (
    <main className='main'>
      <Sidebar/>
      <ViewLayout>
        {useRoutes(routes)}
      </ViewLayout>
    </main>
  )
}

export default Main