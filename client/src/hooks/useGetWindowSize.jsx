import React, { useEffect, useState } from 'react'

export const useGetWindowSize = () => {
  const [screenType, setScreenType] = useState("INITIAL")

  useEffect(() => {
    const updateWindowSize = () => {
      if(window.innerWidth <= 640) setScreenType("SM")
      if(window.innerWidth > 640) setScreenType("MD")
      if(window.innerWidth > 768) setScreenType("LG")
      if(window.innerWidth > 1024) setScreenType("XL")
      if(window.innerWidth > 1536) setScreenType("INITIAL")
    }
    
    window.addEventListener('resize', updateWindowSize)

    updateWindowSize()
    
    return () => {
      window.removeEventListener('resize', updateWindowSize)
    }
    
  }, [window.innerWidth])

  return screenType
}

export default useGetWindowSize