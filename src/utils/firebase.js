import * as firebase from 'firebase'
import {
  FIREBASE_API,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
} from 'react-native-dotenv'

const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
