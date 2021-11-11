import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Auth = (props) => {
  const mySwal = withReactContent(Swal);
  let navigate = useNavigate();

  if (props.type === "auth") {
    mySwal
      .fire({
        title: "Dibatasi!",
        text: "Anda harus login untuk menggunakan fitur ini!",
        icon: "warning",
        confirmButtonText: "Login / Register",
        cancelButtonText: "Lanjut melihat-lihat",
        showCancelButton: true,
      })
      .then((res) => {
        if (res.isConfirmed) {
          navigate("/login");
        } else {
          navigate("/");
        }
      });
  } else {
    mySwal
      .fire({
        title: "Gagal !",
        text: "Anda tidak berhak mengakses fitur ini !",
        icon: "error",
        confirmButtonText: "OK",
      })
      .then((res) => {
        navigate("/");
      });
  }

  return <></>;
};

export default Auth;
