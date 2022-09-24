import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { login as handleLogin , logout } from "@/store/auth"
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
const auth = getAuth()

export const login = async(username, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, username, password)

        return user
    } catch (error) {
        toast.error('Invalid username or password!')        
    }
}