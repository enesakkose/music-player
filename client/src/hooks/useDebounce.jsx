import React, { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [ debouncedValue, setDebouncedValue ] = useState(value)

    useEffect(() => {
        const t = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(t)
        }
    }, [value])

    return debouncedValue
}