import React from 'react'
import Sidebar from '@/components/Sidebar'
import Loading from '@/components/Loading'
import Popups from '@/components/Main/Popups'
import Footer from '@/components/Footer/Layout'
import ViewLayout from '@/components/View/Layout'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { getMobileTabletSize } from '@/utils/size'
import '@/components/Main/Main.scss'

function Layout() {
  const size = getMobileTabletSize()
  const { user } = useSelector(state => state.auth)
  const { profile } = useSelector(state => state.profiles)

  if (user === null || user && profile === null) return <Loading />

  return (
    <section className='main'>
      <Popups/>
      <Toaster/>
      {!size && <Sidebar/>}
      <ViewLayout/>
      <Footer/>
    </section>
  )
}

export default Layout