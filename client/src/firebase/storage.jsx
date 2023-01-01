import { app } from "@/firebase"
import { 
    getStorage, 
    ref, 
    uploadBytesResumable, 
    getDownloadURL, 
    deleteObject } from 'firebase/storage'
import { updatePlaylist } from "@/firebase/db"
import { updateUser } from "@/firebase/auth"
import { toast } from 'react-hot-toast'

const storage = getStorage(app)

export const uploadImg = async(file, id, profile = false) => {
    try {
        const imgRef =  ref(storage, `${id}/${file?.name}`)
        const uploadTask = uploadBytesResumable(imgRef, file)
        uploadTask.on('state_changed',
            (snapshot) => {
                //const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                //setUpload(progress)
            },
            (error) => {
                toast.error(error.message)
            },

            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                    profile 
                    ?   updateUser({
                            photoURL: downloadURL
                        })

                    :   updatePlaylist(id,{
                            coverURL: downloadURL
                        })
                }).catch(error => {
                    toast.error(error.message)
                })
            }
        )
    } catch (error) {
        toast.error(error.message)
    }
}

export const deleteImg = async(imgURL) => {
    try {
        const imgRef = ref(storage, imgURL)
        await deleteObject(imgRef)
    } catch (error) {
        toast.error(error.message)
    }
}

