import axios from 'axios'

export const serverClient = axios.create({
  baseURL: 'http://10.2.74.50:3000',
})
