import Login from "./user/Login"
import Aplikasi from "./user/Aplikasi"
import {useState} from "react"
import { useCookies } from 'react-cookie'

const App = () => {
  const [cookies, setCookies, removeCookies] = useCookies(["autentikasi"])

  const handleState = () => [
    setCookies("autentikasi", 1)
  ]

  return (
    cookies.get("autentikasi") === 0 ? <Login state={() => handleState()}/> : <Aplikasi/>
  )
}

export default App