import { useEffect } from "react";
import  { store } from "@/store";
import { addPlaylist, deleteFavorites, setFavorite, setFavoritesPlaylist, setFavoritePopup } from '@/store/playlist'
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

export const addFavoriteHandle = (thereFavPlaylist, song) => {
    if(thereFavPlaylist){
        store.dispatch(setFavorite(false))
        store.dispatch(deleteFavorites(song.key))
        store.dispatch(setFavoritePopup(true))
        //THIS VALUE OPEN FOR EVERY SITUATION 
    }else{
        store.dispatch(setFavorite(true))
        store.dispatch(setFavoritesPlaylist(song))
        store.dispatch(setFavoritePopup(true))
    }
}