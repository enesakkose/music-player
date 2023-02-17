import React from 'react'
import Footer from '@/Parts/Footer'
import Navbar from '@/components/UI/Navbar'
import UnauthFooterBar from '@/Parts/Footer/UnauthFooterBar'
import { getBreakPoint } from '@/utils/helpers/media'
import { useSelector } from 'react-redux'

function Layout() {
  const SM = getBreakPoint('SM')
  const { user } = useSelector(state => state.auth)

  return (
    <>
      {SM ? <Navbar /> : user ? <Footer /> : <UnauthFooterBar />}
    </>
  )
}

export default Layout