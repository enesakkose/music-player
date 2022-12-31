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
    limit,
    startAfter,
    startAt,
    getDocs,
    getDocsFromServer,
    increment,
    onSnapshot
} from "firebase/firestore"
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { store } from "@/store"
import { addPlaylist } from '@/store/playlist'
import { setProfile } from '@/store/profiles'
import { popup } from '@/utils'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'

export const db = getFirestore(app)
const auth = getAuth(app)

onAuthStateChanged(auth, (user) => {
    if (user)
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

export const addPlaylistHandle = async (playlists, id, userId) => {
    try {
        await setDoc(doc(db, 'playlists', id), {
            name: `My Playlist #${playlists.length + 1}`,
            id: id,
            uid: userId,
            addedSongs: [],
            commentsCount: 0,
            coverURL: null,
            publish: false,
            createdAt: new Date().toISOString()
        })

        return popup(true, 'Added Playlist')
    } catch (error) {
        toast.error(error.message)
    }
}


export const updatePlaylist = async (id, data) => {
    try {
        const playlistRef = doc(db, 'playlists', id)
        await updateDoc(playlistRef, data)
        toast.success('Update successful')
        return true
    } catch (error) {
        toast.error('Update is failed!')
    }
}

export const deletePlaylist = async (id) => {
    try {
        await deleteDoc(doc(db, 'playlists', id))
    } catch (error) {
        toast.error(error.message)
    }
}

export const addToAddedSongs = async (playlistId, song) => {
    try {
        const playlistRef = doc(db, 'playlists', playlistId)

        await updateDoc(playlistRef, {
            addedSongs: arrayUnion(song)
        })

        return popup(true, 'Added song to playlist')
    } catch (error) {
        toast.error(error.message)
    }
}

export const removeFromAddedSongs = async(playlistId, song) => {
    try {
        const playlistRef = doc(db, 'playlists', playlistId)

        await updateDoc(playlistRef, {
            addedSongs: arrayRemove(song)
        })

        return popup(true, 'Removed song to playlist')
    } catch (error) {
        toast.error(error.message)
    }
}

export const addSongToRecentSong = async (currentSong, recentSongs) => {
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

export const addOrRemoveFavoriteSongs = async (data, favorite) => {
    try {
        const fRef = doc(db, 'profiles', auth.currentUser.uid)

        await updateDoc(fRef, {
            favorites: favorite ? arrayRemove(data) : arrayUnion(data)
        })

        return popup(true, `${favorite ? 'Remove' : 'Added'} your favorite songs`)
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

        return popup(true,  `Playlist ${publish ? 'published' : 'removed'} your profile`)
    } catch (error) {
        toast.error(error.message)
    }
}

export const getPublishPlaylists = async(uid, setPublishPlaylists) => {
    try {
        onSnapshot(query(collection(db, 'playlists'), where('uid', '==', uid),where('publish', '==', true)), (doc) => {
            setPublishPlaylists(doc.docs)
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const addComment = async (playlistId, user, values) => {
    try {
        const id = uuidv4()
        await setDoc(doc(db, 'playlists', playlistId, 'comments', id), {
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
            comment: values.comment,
            createdAt: new Date().toISOString(),
            id: id
        })

        await updateDoc(doc(db, 'playlists', playlistId), {
            commentsCount: increment(1)
        })

    } catch (error) {
        toast.error(error.message)
    }
}

export const userProfile = async () => {
    try {
        await setDoc(doc(db, 'profiles', auth.currentUser.uid), {
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: null,
            follower: [],
            following: [],
            recentSongs: [],
            favorites: []
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const profileQuery = async (querySongs, setProfiles) => {
    try {
        const q = query(collection(db, 'profiles'), where('displayName', '==', querySongs))

        const d = await getDocs(q)
        setProfiles(d.docs)
    } catch (error) {
        toast.error(error.message)
    }
}

export const getProfile = async (userId, setProfile) => {
    try {
        onSnapshot(doc(db, "profiles", userId), (doc) => {
            setProfile(doc.data())
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const getPlaylist = async (playlistId, setPlaylist) => {
    try {
        onSnapshot(doc(db, 'playlists', playlistId), (doc) => {
            setPlaylist(doc.data())
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export const follow = async (profile, currentUser) => {
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

export const unfollow = async (profile, currentUser) => {
    try {
        const profileRef = doc(db, 'profiles', profile.uid)
        const currentUserRef = doc(db, 'profiles', currentUser.uid)

        await updateDoc(profileRef, {
            follower: arrayRemove(currentUser)
        })
        await updateDoc(currentUserRef, {
            following: arrayRemove(profile)
        })
    } catch (error) {
        toast.error(error.message)
    }
}


export const docExist = async (id) => {
    try {
        const docRef = doc(db, 'profiles', id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return true
        } else {
            return false
        }
    } catch (error) {
        toast.error(error.message)
    }
}

export const getComments = async (playlistId, setLastVisible, setItems, uid) => {
    try {
        const q = query(collection(db, 'playlists', playlistId, 'comments'),where('uid', '!=', uid), orderBy('uid', 'asc'), limit(10))
        const u = query(collection(db, 'playlists', playlistId, 'comments'), where('uid', '==', uid), orderBy('createdAt', 'desc'), limit(10))
        const documentSnapshots = await getDocs(q)
        const us = await getDocs(u)
        const data = us.docs.concat(documentSnapshots.docs)
        setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1])
        setItems(data)
    } catch (error) {
        console.log(error.message)
    }
}

export const getNextComments = async (playlistId, lastVisible, setLastVisible, setItems, items, uid) => {
    try {
        const next = query(collection(db, 'playlists', playlistId, 'comments'), orderBy('createdAt', 'asc'), startAfter(lastVisible),
            limit(10))

        const nextData = await getDocs(next)

        setLastVisible(nextData.docs[nextData.docs.length - 1])

        let d = []
        nextData.forEach((doc) => {
            d.push(doc)
            setItems([...items, ...d])
        })
    } catch (error) {
        toast.error(error.message)
    }
}