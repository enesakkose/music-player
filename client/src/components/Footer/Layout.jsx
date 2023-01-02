import React from 'react'
import UnauthFooterBar from '@/components/Footer/UnauthFooterBar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Sidebar/Navbar'
import useGetWindowSize from '@/hooks/useGetWindowSize'
import { useSelector } from 'react-redux'

function Layout() {
  const size = useGetWindowSize()
  const { user } = useSelector(state => state.auth)
  
  return (
    <>
      {size === 'SM' 
        ? <Navbar/> 
        : user ? <Footer /> : <UnauthFooterBar/>
      }
    </>
  )
}

export default Layout