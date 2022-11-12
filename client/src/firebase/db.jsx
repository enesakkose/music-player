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
    getDocs,
    onSnapshot } from "firebase/firestore"
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { store } from "@/store"
import { addPlaylist, setDefaultPlaylists } from '@/store/playlist'
import { setProfiles } from '@/store/profiles'
import { popup } from '@/utils'
import { toast } from 'react-hot-toast'

export const db = getFirestore(app)
const auth = getAuth(app)

onAuthStateChanged(auth, (user) => {
    if(user) 
    onSnapshot(query(collection(db, 'playlists'), where('uid', '==', user.uid), orderBy('createdAt', 'desc')), (doc) => {
        store.dispatch(
            addPlaylist(
                doc.docs.reduce((playlists, playlist) => [...playlists, playlist.data()], [])
            )
        )
    }),
    onSnapshot(query(collection(db, 'users'), where('uid', '==', user.uid)), (doc) => {
        store.dispatch(
            setDefaultPlaylists(
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
        coverURL: null,
        comments: [],
        publish: false,
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

export const addOrRemoveAddedSongs = async(playlistId, data, addedSongs) => {
    try {
        const playlistRef = doc(db, 'playlists', playlistId)
        const findInAddedSongs = addedSongs.some(song => song.id === data.id)

        await updateDoc(playlistRef, {
            addedSongs: findInAddedSongs
            ? addedSongs.filter(song => song.id !== data.id)
            : arrayUnion(data)
        })
        
        return popup(true, 'AddSongPopup', `${findInAddedSongs ? 'Removed' : 'Added'}`) 

    } catch (error) {
        toast.error(error.message)
    }
}

export const addDefaultCollection = async() => {
    try {
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
            uid: auth.currentUser.uid,
            recentSongs: [],
            favoriteSongs: []
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const addSongToRecentSong = async(data) => {
    try {
        const recentSongsRef = doc(db, 'users', auth.currentUser.uid)

        await updateDoc(recentSongsRef, {
            recentSongs: arrayUnion(data)
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const addOrRemoveFavoriteSongs = async(data, favoriteSongs) => {
    try {
        const favoriteSongsRef = doc(db, 'users', auth.currentUser.uid)
        const findSameSong = favoriteSongs.some(song => song.key === data.key)
        
        await updateDoc(favoriteSongsRef, {
            favoriteSongs: findSameSong
            ? favoriteSongs.filter(song => song.key !== data.key) 
            : arrayUnion(data)
        })
        return popup(true, 'FavoritePopup', `${findSameSong ? 'Remove' : 'Added'}`)
    } catch (error) {
        toast.error(error.message)
    }
}

export const addComment = async(playlistId, comment) => {
    try {
        const playlistRef = doc(db, 'playlists', playlistId)

        await updateDoc(playlistRef, {
            comments: arrayUnion(comment)
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const publishPlaylist = async(playlistId, publish) => {
    try {
        const playlistRef = doc(db, 'playlists', playlistId)

        await updateDoc(playlistRef, {
            publish: publish
        })
        return popup(true, 'PublishPlaylistPopup', `${publish ? 'now' : 'no longer'}`)
    } catch (error) {
        toast.error(error.message)
    }
}

export const userProfile = async(name = null) => {
    try {
        await setDoc(doc(db, 'profiles', auth.currentUser.uid), {
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName === null ? name : auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
            follower: 0,
            following: 0
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const profileQuery = async(querySongs) => {
    try {
        const q = query(collection(db, 'profiles'), where('displayName', '>=', querySongs))
        const querySnapshot = await getDocs(q)
        store.dispatch(
            setProfiles(
                querySnapshot.docs.reduce((profiles, profile) => [...profiles, profile.data()], [])
            )
        )
    } catch (error) {
        toast.error(error.message)
    }
}

