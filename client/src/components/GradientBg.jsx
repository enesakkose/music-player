import React from 'react'
import clsx from 'clsx'
import '@/components/GradientBg.scss'

function GradientBg({ bgColor, size = '40vh', className }) {
  return (
    <div className={clsx('gradientBg', className)} 
      style={{ backgroundColor: `#${bgColor}`, height: `${size}` }}
    />
  )
}

export default GradientBg