import { addToAddedSongs } from "@/firebase/db"
import { v4 as uuidv4 } from "uuid"

export const addToPlaylist = (playlistId, song) => {
  addToAddedSongs(playlistId, {
    id: uuidv4(),
    track: song,
    createdAt: new Date().toISOString()
  })
}