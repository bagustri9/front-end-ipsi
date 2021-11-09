import Register from "./Register"
import Login from "./Login"
import {useState} from "react"

const Start = () => {
    const [state, setState ] = useState(0)

    return(
        state == 0 ? <Login/> : <Register/>
    )
}