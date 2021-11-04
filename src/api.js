import axios from "axios"

export default axios.create({
  baseURL : 'http://localhost:8000/'
  // baseURL : 'http://ipsi-backend-5.herokuapp.com/'
})