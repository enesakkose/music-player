import { useRef, useEffect, useState } from "react"

export const useScrollTo = (ref, length) => {
  
    const scrollBottom = () => {
      ref.current.scrollToItem(length)
    }
  return scrollBottom
}

export const useScrollEnd = (ref) => {
  const [scrollEnd, setScrollEnd] = useState(false)
  
  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = ref.current || {}

    if (scrollHeight - scrollTop === clientHeight) {
      setScrollEnd(true)
    }else{
      setScrollEnd(false)
    }
  }

  useEffect(() => {
    ref?.current?.addEventListener('scroll', handleScroll)

    return () => {
      ref?.current?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollEnd
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