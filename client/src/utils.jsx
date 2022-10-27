import { useEffect } from "react"
import  { store } from "@/store"
import { 
    addPlaylist, 
    deleteFavorites, 
    setFavorite, 
    setFavoritesPlaylist } from '@/store/playlist'
import { setOpenPopup } from "@/store/popup"
import { closeModal } from "@/store/modal"

export const closeModalHandle = () => {
    store.dispatch(closeModal())
}

export const addFavoriteHandle = (thereFavPlaylist, song) => {
    if(thereFavPlaylist){
        store.dispatch(setFavorite(false))
        store.dispatch(deleteFavorites(song.key))
        store.dispatch(setOpenPopup({ open: true, name: 'FavoritePopup' }))
        //THIS VALUE OPEN FOR EVERY SITUATION 
    }else{
        store.dispatch(setFavorite(true))
        store.dispatch(setFavoritesPlaylist(song))
        store.dispatch(setOpenPopup({ open: true, name: 'FavoritePopup' }))
    }
}