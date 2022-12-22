import { useRef, useEffect } from "react"

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