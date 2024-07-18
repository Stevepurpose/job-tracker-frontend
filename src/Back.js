import axios from 'axios'
import { ACCESS_TOKEN } from './constants'

const Backendurl = axios.create({
    baseURL:process.env.REACT_APP_BACKEND_API_URL 
})


Backendurl.interceptors.request.use(
  (config)=>{
    let token = localStorage.getItem(ACCESS_TOKEN);
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error)=>{
    return Promise.reject(error)
  }


)


export default Backendurl