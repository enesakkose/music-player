import React from 'react'
import EmptyField from '@/components/EmptyField'
import LightBtn from '@/components/LightBtn'
import { Link } from 'react-router-dom'

function EmptyFavList() {
  return (
    <EmptyField icon='Music'>
      <Link to='/search'>
        <LightBtn text='Find Songs'/> 
      </Link>
    </EmptyField>
  )
}

export default EmptyFavList