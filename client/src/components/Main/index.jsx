import React from 'react'
import Sidebar from '@/components/Sidebar'
import ViewLayout from '@/components/Main/View/ViewLayout'
import '@/components/Main/Main.scss'


function Main() {
  return (
    <main className='main'>
      <Sidebar/>
      <ViewLayout/>
    </main>
  )
}

export default Main