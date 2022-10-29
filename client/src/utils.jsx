import  { store } from "@/store"
import {  
    deleteFavorites, 
    setFavorite, 
    setFavoritesPlaylist } from '@/store/playlist'
import { setOpenPopup } from "@/store/popup"
import { closeModal, openModal } from "@/store/modal"
import { auth } from "@/firebase/auth"
import { login } from "@/store/auth"

export const user = () => {
    store.dispatch(login({
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        emailVerified: auth.currentUser.emailVerified,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid
    }))
}

export const closeModalHandle = () => {
    store.dispatch(closeModal())
}

export const modal = (name, data = false) => {
    store.dispatch(openModal({
        name,
        data
    }))
}

export const popup = (open, name = false) => {
    store.dispatch(setOpenPopup({
        open,
        name
    }))
}

export const addFavoriteHandle = (thereFavPlaylist, song) => {
    if(thereFavPlaylist){
        store.dispatch(setFavorite(false))
        store.dispatch(deleteFavorites(song.key))
        popup(true, 'FavoritePopup')
        //THIS VALUE OPEN FOR EVERY SITUATION 
    }else{
        store.dispatch(setFavorite(true))
        store.dispatch(setFavoritesPlaylist(song))
        popup(true, 'FavoritePopup')
    }
}