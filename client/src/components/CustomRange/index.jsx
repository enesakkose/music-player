import React from 'react'
import Slider from 'rc-slider'
import '@/assets/range.css'
import '@/components/CustomRange.scss'

function CustomRange({ min, max, step, value, onChange, className, ...props }) {
  return (
    <Slider
      {...props}
      className={className}
      value={value}
      onChange={onChange}
      min={min} 
      max={max} 
      step={step}
    />
  )
}

export default CustomRange