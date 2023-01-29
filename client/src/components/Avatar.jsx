import React from 'react'
import Icon from '@/components/Icon'
import '@/components/Avatar.scss'

function Avatar({src, size, ...props}) {
  const a = src === null || src === ''

  return (
    <>
      {a && <Icon name='Avatar' size={size}/>}
      {!a && <img 
        src={src}
        referrerPolicy="no-referrer"
        style={{ 
          width: `${size}`,
          height: `${size}`, 
          borderRadius: '50%', 
          ...props
        }}
      />}
    </>
  )
}

export default Avatar