import React from 'react'
import EmptyField from '@/components/EmptyField'
import LightBtn from '@/components/LightBtn'
import Button from '@/components/Button'

function EmptyFavList() {
  return (
    <EmptyField icon='Music'>
      <Button href='/search'>
        <LightBtn text='Find Songs' />
      </Button>
    </EmptyField>
  )
}

export default EmptyFavList