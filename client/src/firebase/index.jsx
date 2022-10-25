import { initializeApp } from "firebase/app"
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import { login, logout } from "@/store/auth"
import { store } from "@/store"


import toast from "react-hot-toast"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
console.log('features bitti')
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