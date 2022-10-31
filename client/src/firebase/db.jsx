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
    orderBy,
    updateDoc,
    arrayUnion,
    onSnapshot } from "firebase/firestore"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/auth'
import { store } from "@/store"
import { addPlaylist } from '@/store/playlist'
import { popup } from '@/utils'
import { toast } from 'react-hot-toast'

const db = getFirestore(app)

onAuthStateChanged(auth, (user) => {
    if(user) 
    onSnapshot(query(collection(db, 'playlists'), where('uid', '==', auth.currentUser.uid), orderBy('createdAt', 'desc')), (doc) => {
        store.dispatch(
            addPlaylist(
                doc.docs.reduce((playlists, playlist) => [...playlists, playlist.data()], [])
            )
            )
    })
})

export const addPlaylistHandle = async(playlists, id, userId) => {
    await setDoc(doc(db, 'playlists', id),{
        name: `My Playlist #${playlists.length + 1}`,
        id : id,
        uid: userId,
        addedSongs: [],
        createdAt: new Date().toISOString()
    })
    popup(true, 'AddPlaylistPopup')
}


export const updatePlaylist = async(id, data) => {
    try {
        const playlistRef = doc(db, 'playlists', id)
        await updateDoc(playlistRef, data)
        toast.success('Update successful')
        return true
    } catch (error) {
        toast.error('Update is failed!')
    }
}

export const deletePlaylist = async(id) => {
    try {
        await deleteDoc(doc(db, 'playlists', id))
    } catch (error) {
        toast.error(error.message)
    }
}


export const addSongToPlaylist = async(id,data) => {
    try {
        const playlistRef = doc(db, 'playlists', id)
        await updateDoc(playlistRef, {
            addedSongs: arrayUnion(data)
        })
    } catch (error) {
        toast.error('Failed!!!')
    }
}

export const removeSongToPlaylist = async(id, songId, addedSongs) => {
    try {
        const playlistRef = doc(db, 'playlists', id)
        await updateDoc(playlistRef, {
            addedSongs: addedSongs.filter(song => song.id !== songId)
        })
    } catch (error) {
        toast.error(error.message)
    }
}