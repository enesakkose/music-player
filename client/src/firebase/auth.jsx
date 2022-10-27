import { app } from '@/firebase'
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
    signOut
} from 'firebase/auth'
import { store } from "@/store"
import { login, logout } from "@/store/auth"
import toast from "react-hot-toast"


const provider = new GoogleAuthProvider()
export const auth = getAuth(app)

export const handleLogin = async(username, password) => {
    try {
        return await signInWithEmailAndPassword(auth, username, password)

        
    } catch (error) {
        toast.error('Invalid username or password')        
    }
}

export const createUser = async(username, password) => {
    try {
        return await createUserWithEmailAndPassword(auth, username, password)

    } catch (error) {
        toast.error('This email already using!')
    }
}

export const loginWithGoogle = async() => {
    try {
        return await signInWithPopup(auth, provider)
        
    } catch (error) {
        toast.error('Something went wrong')
    }
}

export const handleLogout = async() => {
    try {
        return await signOut(auth)

    } catch (error) {
        toast.error('Failed!!!')
    }
}

onAuthStateChanged(auth, (user) => {
    if(user){
        store.dispatch(login({
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            uid: user.uid
        }))
    }else{
        store.dispatch(logout())
    }
})

export const updateUser = async(data) => {
    try {
        await updateProfile(auth.currentUser, data)
        toast.success('Profile updated')
        return true
    } catch (error) {
        toast.error('Failed!!!')
    }
}

export const updateMail = async(password, newEmail) => {
    try {
        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            password
        )
        await reauthenticateWithCredential(auth.currentUser, credential)
        await updateEmail(auth.currentUser, newEmail)
        return toast.success('Succes')
    } catch (error) {
        toast.error('Failed!!!')
    }
}

export const updateUserPassword = async(currentPassword,password) => {
    try {
        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            currentPassword
        )
        await reauthenticateWithCredential(auth.currentUser, credential)
        await updatePassword(auth.currentUser, password)
        return toast.success('Succes')
    } catch (error) {
        toast.error('Failed!!!')
    }
}