import { app } from '@/firebase'
import { 
    getFirestore, 
    collection, 
    addDoc,
    setDoc,
    getDoc,
    doc,
    deleteDoc,
    query,
    where,
    orderBy,
    updateDoc,
    arrayUnion,
    arrayRemove,
    getDocs,
    increment,
    onSnapshot } from "firebase/firestore"
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { store } from "@/store"
import { addPlaylist } from '@/store/playlist'
import { setProfiles, setProfile } from '@/store/profiles'
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

    onSnapshot(query(collection(db, 'profiles'), where('uid', '==', user.uid)), (doc) => {
        doc.docs.map((profile) => (
            store.dispatch(
                setProfile(profile.data())
            )
        ))
    })
})

export const addPlaylistHandle = async(playlists, id, userId) => {
    try{
        await setDoc(doc(db, 'playlists', id),{
            name: `My Playlist #${playlists.length + 1}`,
            id : id,
            uid: userId,
            addedSongs: [],
            coverURL: null,
            comments: [],
            createdAt: new Date().toISOString()
        })
        popup(true, 'AddPlaylistPopup')
    } catch (error) {
        toast.error(error.message)
    }
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

export const addSongToRecentSong = async(currentSong, recentSongs) => {
    try {
        const recentRef = doc(db, 'profiles', auth.currentUser.uid)
        const findCurrent = recentSongs.some(song => song.key === currentSong.key)
        const filteredSongs = recentSongs.filter(song => song.key !== currentSong.key)
        
        await updateDoc(recentRef, {
            recentSongs: findCurrent 
            ? [...filteredSongs, currentSong]
            : arrayUnion(currentSong)
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const addOrRemoveFavoriteSongs = async(data, favorite) => {
    try {
        const fRef = doc(db, 'profiles', auth.currentUser.uid)
        //const findSameSong = favoriteSongs.some(song => song.key === data.key)
        /*const q = query(collection(db, 'profiles'), where('favorites', '==', data))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
        })*/

        await updateDoc(fRef, {
            favorites: favorite ? arrayRemove(data) : arrayUnion(data)
        })

        return popup(true, 'FavoritePopup', `${favorite ? 'Remove' : 'Added'}`)
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

export const userProfile = async() => {
    try {
        await setDoc(doc(db, 'profiles', auth.currentUser.uid), {
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
            follower: [],
            following: [],
            recentSongs: [],
            favoriteSongs: []
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const profileQuery = async(querySongs = false, id = false) => {
    try {
        onSnapshot(query(collection(db, 'profiles'), id ? where('uid', '==', id) : where('displayName', '==', querySongs)), (doc) => {
            store.dispatch(
                setProfiles(
                    doc.docs.reduce((profiles, profile) => [...profiles, profile.data()], [])
                )
            )
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const getProfile = async(userId, setProfile) => {
    try {
        onSnapshot(doc(db, "profiles", userId), (doc) => {
            setProfile(doc.data())
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const getPlaylist = async(playlistId, setPlaylist) => {
    try {
        onSnapshot(doc(db, 'playlists', playlistId), (doc) => {
            setPlaylist(doc.data())
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const follow = async(profile, currentUser) => {
    try {
        const profileRef = doc(db, 'profiles', profile.uid)
        const currentUserRef = doc(db, 'profiles', currentUser.uid)

        await updateDoc(profileRef, {
            follower: arrayUnion(currentUser)
        })
        await updateDoc(currentUserRef, {
            following: arrayUnion(profile)
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const unfollow = async(profile, currentUser) => {
    try{
        const profileRef = doc(db, 'profiles', profile.uid)
        const currentUserRef = doc(db, 'profiles', currentUser.uid)

        await updateDoc(profileRef, {
            follower: arrayRemove(currentUser)
        })
        await updateDoc(currentUserRef, {
            following: arrayRemove(profile)
        })
    } catch(error) {
        toast.error(error.message)
    }
}


export const docExist = async(id) => {
    try {
        const docRef = doc(db, 'profiles', id)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()) {
            return true
        } else{
            return false
        }
    } catch (error) {
        toast.error(error.message)
    }
}