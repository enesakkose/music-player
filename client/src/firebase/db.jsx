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
    getDoc,
    arrayRemove,
    getDocs,
    increment,
    onSnapshot } from "firebase/firestore"
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { store } from "@/store"
import playlist, { addPlaylist, setDefaultPlaylists } from '@/store/playlist'
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
    try {
        await setDoc(doc(db, 'playlists', id),{
            name: `My Playlist #${playlists.length + 1}`,
            id : id,
            uid: userId,
            displayName: auth.currentUser.displayName,
            addedSongs: [],
            coverURL: null,
            comments: [],
            publish: false,
            createdAt: new Date().toISOString()
        })
        const userRef = doc(db, 'newUsers', auth.currentUser.uid)
        {/*await updateDoc(userRef, {
            playlists: arrayUnion({
                name: `My Playlist #${playlists.length + 1}`,
                id : id,
                uid: auth.currentUser.uid,
                displayName: auth.currentUser.displayName,
                addedSongs: [],
                coverURL: null,
                comments: [],
                publish: false,
                createdAt: new Date().toISOString()
            })
        })*/}
        return popup(true, 'AddPlaylistPopup')
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

export const addSongToRecentSong = async(currentSong, recentSongs) => {
    try {
        const recentSongsRef = doc(db, 'users', auth.currentUser.uid)
        const findCurrent = recentSongs.some(song => song.key === currentSong.key)
        const filteredSongs = recentSongs.filter(song => song.key !== currentSong.key)
        await updateDoc(recentSongsRef, {
            recentSongs: findCurrent 
            ? [...filteredSongs, currentSong]
            : arrayUnion(currentSong)
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
            follower: [],
            following: []
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

export const getPlaylist = async(playlistId) => {
    try {
        const playlistRef = doc(db, 'playlists', playlistId)
        const getPlaylist = await getDoc(playlistRef)
        return getPlaylist.data()
    } catch (error) {
        console.log(error)
    }
}

export const getProfile = async(userId) => {
    try {
        const q = query(collection(db, 'profiles'), where('uid', '==', userId))
        const querySnapshot = await getDocs(q)
        let profile = null
        querySnapshot.forEach((doc) => {
            profile = doc.data()
        })
        return profile
    } catch (error) {
        toast.error(error.message)
    }
}

export const followOrUnfollow = async(profiles, currentUser) => {
    try {
        const profileRef = doc(db, 'profiles', profiles[0].uid)
        const currentUserRef = doc(db, 'profiles', currentUser.uid)
        const currentUserProfile = await getProfile(currentUser.uid)
        const findUser = profiles[0].follower.find(profile => profile.uid === currentUser.uid)
        const findInFollowing = currentUserProfile.following.find(profile => profile.uid === profiles[0].uid)
        await updateDoc(profileRef, {
            follower: findUser
            ? profiles[0].follower.filter(user => user.uid !== currentUser.uid)
            : arrayUnion(currentUserProfile)
        })
        await updateDoc(currentUserRef, {
            following: findInFollowing
            ? currentUserProfile.following.filter(profile => profile.uid !== profiles[0].uid)
            : arrayUnion(profiles[0])
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const newCreateUser = async() => {
    try {
        await setDoc(doc(db, 'newUsers', auth.currentUser.uid),{
            photoURL: auth.currentUser.photoURL,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            following: [],
            follower: [],
            playlists: [],
            favoriteSongs: [],
            recentSongs: []
        })
    } catch (error) {
        toast.error(error.message)
    }
}