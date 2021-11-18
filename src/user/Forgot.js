import api from "../api.js";
import Logo from "../assets/img/logo.png";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Forgot(props) {
  const swal = withReactContent(Swal);
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    swal.showLoading()
    api
      .post("api/forgot-password", { email: email })
      .then((res) => {
        console.log(res);
        if (res.data.email == "We can't find a user with that email address.") {
          swal.fire({
            title: <strong>Gagal !</strong>,
            html: <i>Email tidak ditemukan !</i>,
            icon: "error",
          });
        } else {
          swal.fire({
            title: <strong>Berhasil !</strong>,
            html: <i>Email telah dikirim, jika email tidak ditemukan cek di spam!</i>,
            icon: "success",
          });
          navigate('/login')
        }
      })
      .catch(() => {
        swal.fire({
          title: <strong>Error !</strong>,
          html: <i>Something went wrong !</i>,
          icon: "error",
        });
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Lupa Password</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <input
                        className="btn btn-primary btn-user btn-block"
                        type="submit"
                        value="Submit"
                      />
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
