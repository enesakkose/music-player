import React from 'react'
import { useSelector } from 'react-redux'


function Home() {
  const { user } = useSelector(state => state.auth)

  return (
    <div>Home</div>
  )
}

export default Home