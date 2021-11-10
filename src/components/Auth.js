import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Auth = (props) => {
  const mySwal = withReactContent(Swal);

  return (
    <>
      {mySwal
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
            <Navigate to="/login" />;
          } else {
            <Navigate to="/dashboard" />;
          }
        })}
    </>
  );
};

export default Auth;
