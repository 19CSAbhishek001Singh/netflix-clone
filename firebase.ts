import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBxhxrraJmincPYFECfnOycHA_F37g-kjg',
  authDomain: 'netflix-clone-project-86009.firebaseapp.com',
  projectId: 'netflix-clone-project-86009',
  storageBucket: 'netflix-clone-project-86009.appspot.com',
  messagingSenderId: '629777771842',
  appId: '1:629777771842:web:efad12e41c93b124c02cdb',
}
// using nextjs ssr so do this
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
