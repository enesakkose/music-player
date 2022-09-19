import  { store } from "@/store";
import { addPlaylist } from '@/store/Playlist'


export const addPlaylistHandle = (playlists) => {
    store.dispatch(addPlaylist(playlists))
}


