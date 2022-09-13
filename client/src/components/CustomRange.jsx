import React from 'react'
import Slider from 'rc-slider'
import '@/assets/range.css'
import '@/components/CustomRange.scss'

function CustomRange({min, max, step, value, onChange, ...props}) {
  return (
    <>
      <Slider
      value={value}
      onChange={onChange}
      min={min} 
      max={max} 
      step={step}
      {...props}
      />
    </>
  )
}

export default CustomRange