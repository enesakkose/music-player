import React, { useEffect, useState } from "react"
import { getProfile } from "@/firebase/db"


export const useGetProfile = (userId) => {
    const [ profile, setProfile ] = useState(null)
    
    useEffect(() => {
        (async () => {
            const resultProfile =  await getProfile(userId)
            setProfile(resultProfile)
        })()
    }, [userId])

    return profile
}