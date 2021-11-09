import Login from "./user/Login"
import Aplikasi from "./user/Aplikasi"
import {useState} from "react"
import { useCookies } from 'react-cookie'

const App = () => {
  const [cookies, setCookies] = useCookies(["authentication"])

  const handleState = () => [
    setCookies("authentication", "0")
  ]
  handleState()

  return (
    cookies.authentication === "0" ? <Login state={() => handleState()}/> : <Aplikasi/>
  )
}

export default App