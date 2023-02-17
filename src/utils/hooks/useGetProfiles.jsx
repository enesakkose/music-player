import React, { useEffect, useState } from "react"
import { profileQuery } from "@/firebase/db"


export const useGetProfiles = (query) => {
    const [ profiles, setProfiles ] = useState(null)
    
    useEffect(() => {
        (async () => {
            await profileQuery(query, setProfiles)
        })()
    }, [query])

    return profiles
}