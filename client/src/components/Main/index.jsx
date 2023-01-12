import React from 'react'
import Sidebar from '@/components/Sidebar'
import ViewLayout from '@/components/View/Layout'
import { getMobileTabletSize } from '@/utils/size'
import '@/components/Main/Main.scss'

function Main() {
  const size = getMobileTabletSize()
  
  return (
    <section className='main'>
      {!size && <Sidebar />}
      <ViewLayout size={size}/>
    </section>
  )
}

export default Main