import React from 'react'
import Sidebar from '@/components/Sidebar'
import ViewLayout from '@/components/View/Layout'
import Popups from '@/components/Main/Popups'
import '@/components/Main/Main.scss'

function Main() {
  return (
    <section className='main'>
      <Popups />
      <Sidebar />
      <ViewLayout />
    </section>
  )
}

export default Main