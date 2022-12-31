import React from 'react'
import Icon from '@/components/Icon'
import '@/components/Avatar.scss'

function Avatar({src, size, ...props}) {
  return (
    <>
      {src === null && <Icon name='Avatar' size={size}/>}
      {src !== null && <img 
        src={src}
        referrerPolicy="no-referrer"
        style={{ width: `${size}` ,height: `${size}`, borderRadius: '50%', ...props}}
      />}
    </>
  )
}

export default Avatar