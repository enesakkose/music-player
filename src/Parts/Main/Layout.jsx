import React from 'react'
import Sidebar from '@/Parts/Sidebar'
import Loading from '@/components/UI/Loading'
import Popups from '@/Parts/Main/Popups'
import Footer from '@/Parts/Footer/Layout'
import View from '@/Parts/View/Layout'
import { useSelector } from 'react-redux'
import { getBreakPoint } from '@/utils/helpers/media'
import '@/Parts/Main/Main.scss'

function Layout() {
  const SM = getBreakPoint('SM')
  const { user } = useSelector(state => state.auth)
  const { profile } = useSelector(state => state.profiles)

  if (user === null || user && profile === null) return <Loading />

  return (
    <section className='main'>
      <Popups />
      {!SM && <Sidebar />}
      <View />
      <Footer />
    </section>
  )
}

export default Layout