import axios from 'axios'

export const serverClient = axios.create({
  // baseURL: 'http://10.2.80.247:3000',
  baseURL: 'http://192.168.43.233:3000',
  // baseURL: 'https://klener.df.r.appspot.com/',
})
