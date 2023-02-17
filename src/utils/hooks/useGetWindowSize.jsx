import React, { useEffect, useState } from 'react'

export const useGetWindowSize = () => {
  const isWindowClient = typeof window === "object"
  const getBreakPoint = (windowWidth) => {
    if (windowWidth) {
      if (windowWidth < 480) {
        return "SM"
      } else if (windowWidth <= 1024) {
        return "MD";
      } else if (windowWidth <= 1200) {
        return "LG"
      } else {
        return "XL"
      }
    } else {
      return undefined
    }
  }
  
  const [screenType, setScreenType] = useState(
    isWindowClient    
    ? getBreakPoint(window.innerWidth)
    : undefined
  )

  useEffect(() => {
    const handleSize = () => {
      setScreenType(getBreakPoint(window.innerWidth))
    }

    if(isWindowClient) {
      window.addEventListener('resize', handleSize)
      
      return () => window.removeEventListener('resize', handleSize)
    }
    
  }, [isWindowClient, setScreenType])

  return screenType
}

export default useGetWindowSize