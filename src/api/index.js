import axios from 'axios'

export const serverClient = axios.create({
  baseURL: 'http://localhost:3000',
})
