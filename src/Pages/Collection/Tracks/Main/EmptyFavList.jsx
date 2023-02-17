import React from 'react'
import EmptyField from '@/components/EmptyField'
import Button from '@/components/UI/Button'

function EmptyFavList() {
  return (
    <EmptyField icon='Music'>
      <Button variant='contained' color='primary' href='/search'>
        Find Songs
      </Button>
    </EmptyField>
  )
}

export default EmptyFavList