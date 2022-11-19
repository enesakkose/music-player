import React from 'react'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import ViewLayoutHeader from '@/components/View/ViewLayoutHeader'
import Popups from '@/components/MainLayout/Popups'
import { Outlet } from 'react-router-dom'
import '@/components/MainLayout/MainLayout.scss'

function MainLayout() {
  return (
    <>
      <section className='main'>
        <Popups/>
        <Sidebar/>
        <div className='viewLayout'>
          <ViewLayoutHeader/>
          <Outlet/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default MainLayout