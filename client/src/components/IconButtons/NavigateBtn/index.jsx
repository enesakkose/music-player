import React from 'react'
import Button from '@/components/UI/Button'
import Icon from '@/components/UI/Icon'

function NavigateBtn({ icon = 'left', size = 24, ...props }) {
  return (
    <Button {...props}>
      <Icon name={icon} size={size} />
    </Button>
  )
}

export default NavigateBtn