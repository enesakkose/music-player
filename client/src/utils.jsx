import  { store } from "@/store";
import { addPlaylist } from '@/store/Playlist'
import { closeModal } from "@/store/modal";


export const addPlaylistHandle = (playlists) => {
    store.dispatch(addPlaylist(playlists))
}

export const closeModalHandle = () => {
    store.dispatch(closeModal())
}
