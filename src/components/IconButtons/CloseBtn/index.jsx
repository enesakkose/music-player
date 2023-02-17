import React from 'react'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'

function CloseBtn({ size = 24, name = 'Close', ...props }) {
  return (
    <Button {...props}>
      <Icon name={name} size={size} />
    </Button>
  )
}

export default CloseBtn