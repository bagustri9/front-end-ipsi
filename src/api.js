import axios from "axios"

export default axios.create({
  baseURL : 'https://ipsi-backend-5.herokuapp.com/api'
})