import { useRef, useEffect } from "react"

export const useClickOutside = (menu) => {
    const domNode = useRef()

    useEffect(() => {
        const maybeHandler = (e) => {
            if(!domNode?.current?.contains(e.target)){
                menu()
            }
        }

        document.addEventListener("mousedown", maybeHandler)

        return () => {
            document.removeEventListener("mousedown", maybeHandler)
        }
    })

    return domNode
}