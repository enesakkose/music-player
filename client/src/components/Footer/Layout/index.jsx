import React from 'react'
import UnauthFooterBar from '@/components/Footer/UnauthFooterBar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { getMobileTabletSize } from '@/utils/size'
import { useSelector } from 'react-redux'

function Layout() {
  const size = getMobileTabletSize()
  const { user } = useSelector(state => state.auth)

  return (
    <>
      {size ? <Navbar/> : user ? <Footer /> : <UnauthFooterBar/>}
    </>
  )
}

export default Layout