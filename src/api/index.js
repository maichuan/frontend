import axios from 'axios'

export const serverClient = axios.create({
  baseURL: 'http://10.2.80.247:3000',
})
