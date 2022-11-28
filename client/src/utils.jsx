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

export const popup = (open, name = false, text = false) => {
    store.dispatch(setOpenPopup({
        open,
        name,
        text
    }))
}
