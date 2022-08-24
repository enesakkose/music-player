import React from 'react'
import ViewLayoutHeader from '@/components/Main/View/ViewLayoutHeader'
import { Outlet } from 'react-router-dom'
import '@/components/Main/View/ViewLayout.scss'

function ViewLayout({children}) {
  return (
    <section className='viewLayout'>
        <ViewLayoutHeader/>
        {children}
        <Outlet/>
    </section>
  )
}

export default ViewLayout