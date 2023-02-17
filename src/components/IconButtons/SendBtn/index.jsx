import React from 'react'
import Button from '@/components/UI/Button'
import Icon from '@/components/UI/Icon'

function SendBtn({ ...props }) {
  return (
    <Button type='submit' variant='contained' color='secondary' {...props}>
      <Icon name='Send' size={22}/>
    </Button>
  )
}

export default SendBtn