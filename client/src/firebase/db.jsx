import { app } from '@/firebase'
import { 
    getFirestore, 
    collection, 
    addDoc,
    setDoc,
    doc,
    deleteDoc,
    query,
    where,
    onSnapshot } from "firebase/firestore"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/auth'
import { store } from "@/store"
import { addPlaylist } from '@/store/playlist'
import { setOpenPopup } from "@/store/popup"
import { toast } from 'react-hot-toast'

const db = getFirestore(app)

export const addPlaylistHandle = async(playlists, id, userId) => {
    await setDoc(doc(db, 'playlists', id),{
        name: `My Playlist #${playlists.length + 1}`,
        uid: userId
    })
    store.dispatch(setOpenPopup({ open: true, name: 'AddPlaylistPopup' }))
}

onAuthStateChanged(auth, (user) => {
    if(user) 
    onSnapshot(query(collection(db, 'playlists'), where('uid', '==', auth.currentUser.uid)), (doc) => {
        store.dispatch(
            addPlaylist(
                doc.docs.reduce((playlists, playlist) => [...playlists, playlist.data()], [])
            )
        )
    })
})

export const deletePlaylist = async(id) => {
    try {
        await deleteDoc(doc(db, 'playlists', id))
    } catch (error) {
        toast.error(error.message)
    }
}