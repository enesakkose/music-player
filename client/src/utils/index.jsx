import  { store } from "@/store"
import { setOpenPopup } from "@/store/popup"
import { closeModal, openModal } from "@/store/modal"

export const closeModalHandle = () => {
    store.dispatch(closeModal())
}

export const modal = (name, data = false) => {
    store.dispatch(openModal({
        name,
        data
    }))
}

export const popup = (open, text = false) => {
    store.dispatch(setOpenPopup({
        open,
        text
    }))
}

export const unauthModal = (e) => {
    e.preventDefault()
    modal('UnauthModal')
}

export const navigateAuth = () => {
    window.location.href='/auth' 
}