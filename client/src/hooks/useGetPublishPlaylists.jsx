import React, { useEffect, useState } from "react"
import { getPublishPlaylists } from "@/firebase/db"


export const useGetPublishPlaylists = (uid) => {
    const [ publishPlaylists, setPublishPlaylists ] = useState(null)
    
    useEffect(() => {
        (async () => {
            await getPublishPlaylists(uid, setPublishPlaylists)
        })()
    }, [uid])

    return publishPlaylists
}    