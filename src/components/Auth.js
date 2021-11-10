import {Redirect} from "react-router-dom";
import {useState} from "react"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Auth = (props) => {

  const [confirm,
    setConfirm] = useState(false)

  const mySwal = withReactContent(Swal);

  mySwal.fire({
    title: "Dibatasi!",
    text: "Anda harus login untuk menggunakan fitur ini!",
    icon: "warning",
    confirmButtonText: "Login / Register",
    cancelButtonText: "Lanjut melihat-lihat",
    showCancelButton: true
  })
  return (
    ""
    )
}

export default Auth