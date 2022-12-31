import React from 'react'
import Sidebar from '@/components/Sidebar'
import ViewLayout from '@/components/View/Layout'
import '@/components/Main/Main.scss'

function Main() {
  return (
    <section className='main'>
      <Sidebar />
      <ViewLayout />
    </section>
  )
}

export default Main