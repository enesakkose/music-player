import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import { store } from "@/store"
import { login, logout } from "@/store/auth"
import { app } from '@/firebase'
import toast from "react-hot-toast"


const provider = new GoogleAuthProvider()
const auth = getAuth(app)

export const handleLogin = async(username, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, username, password)

        return store.dispatch(login(user.providerData[0]))
    } catch (error) {
        toast.error('Invalid username or password')        
    }
}

export const createUser = async(username, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, username, password)

        return store.dispatch(login(user.providerData[0]))
    } catch (error) {
        toast.error('This email already using!')
    }
}

export const loginWithGoogle = async() => {
    try {
        const { user } = await signInWithPopup(auth, provider)

        return store.dispatch(login(user.providerData[0]))
    } catch (error) {
        toast.error('Something went wrong')
    }
}

export const handleLogout = async() => {
    try {
        await signOut(auth)

        return store.dispatch(logout())
    } catch (error) {
        toast.error('Failed!!!')
    }
}