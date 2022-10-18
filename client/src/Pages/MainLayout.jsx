import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default MainLayout