import React, { useEffect, useState } from "react"
import { getProfile } from "@/firebase/db"


export const useGetProfile = (userId) => {
    const [ profile, setProfile ] = useState(null)
    
    useEffect(() => {
        (async () => {
            await getProfile(userId, setProfile)
        })()
    }, [userId])

    return profile
}