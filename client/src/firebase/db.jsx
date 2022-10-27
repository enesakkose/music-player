import { app } from '@/firebase'
import { 
    getFirestore, 
    collection, 
    addDoc,
    query, 
    onSnapshot } from "firebase/firestore"
import { store } from "@/store"
import { addPlaylist } from '@/store/playlist'
import { setOpenPopup } from "@/store/popup"

const db = getFirestore(app)

export const addPlaylistHandle = async(playlists, id) => {
    await addDoc(collection(db, 'playlists'),{
        name: `My Playlist #${playlists.length + 1}`,
        id : id
    })
    store.dispatch(setOpenPopup({ open: true, name: 'AddPlaylistPopup' }))
}
onSnapshot(collection(db, 'playlists'), (doc) => {
    store.dispatch(
        addPlaylist(
            doc.docs.reduce((playlists, playlist) => [...playlists, playlist.data()], [])
        )
    )
})