import { useRef, useEffect } from 'react'

export const useFocus = () => {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
      }, [])

    return inputRef
}