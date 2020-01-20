import * as firebase from 'firebase'

const dotenv = require('dotenv')

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
