import  { store } from "@/store";
import { addPlaylist } from '@/store/Playlist'
import { closeModal } from "@/store/modal"
import { v4 as uuidv4 } from 'uuid'

export const addPlaylistHandle = (playlists) => {
    store.dispatch(addPlaylist({
        name: `My Playlist #${playlists.length + 1}`,
        id : uuidv4()
    }))
}

export const closeModalHandle = () => {
    store.dispatch(closeModal())
}
