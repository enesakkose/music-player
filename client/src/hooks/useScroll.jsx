import { useRef, useEffect, useState } from "react"

export const useScroll = (ref, length) => {
  
    const scrollBottom = () => {
      ref.current.scrollToItem(length)
    }
  return scrollBottom
}

export const useAutoScroll = (dep, length) => {
  const ref = useRef(null)

  useEffect(() => {
    const scrollBottom = () => {
      ref.current.scrollToItem(length)
    }
    
    return scrollBottom()
  }, [dep])

  return ref
}

export const useScrollEnd = (ref) => {
  const { scrollHeight, scrollTop, clientHeight } = ref.current || {}

  if (scrollHeight - scrollTop === clientHeight) {
    return true
  }else{
    return false
  }
}

export const useHandleScroll = (ref) => {
  const [ scrollTop, setScrollTop] = useState(0)
  const handleScroll = () => {
    setScrollTop(ref.current.scrollTop)
  }

  useEffect(() => {
    ref?.current?.addEventListener('scroll', handleScroll)

    return () => {
      ref?.current?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return scrollTop
}