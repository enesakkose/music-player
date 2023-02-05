import React, { useEffect, useState } from "react"
import { getPlaylist } from "@/firebase/db"

export const useGetPlaylist = (playlistId) => {
    const [ playlist, setPlaylist ] = useState(null)
    
    useEffect(() => {
        (async () => {
            await getPlaylist(playlistId, setPlaylist)
        })()
    }, [playlistId])

    return playlist
}