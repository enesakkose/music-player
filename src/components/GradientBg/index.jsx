import React from 'react'
import clsx from 'clsx'
import styles from '@/components/GradientBg/GradientBg.module.scss'

function GradientBg({ bgColor, size = '40vh', className }) {
  return (
    <div className={clsx(styles.gradientBg, className)} 
      style={{ backgroundColor: `#${bgColor}`, height: `${size}` }}
    />
  )
}

export default GradientBg