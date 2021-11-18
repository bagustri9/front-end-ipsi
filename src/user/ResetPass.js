import api from "../api.js";
import Logo from "../assets/img/logo.png";
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ResetPass(props) {
  const swal = withReactContent(Swal);
  let navigate = useNavigate();
  let { token } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let passw = e.target.passw.value;
    let passw2 = e.target.passw2.value;
    let data = {
        'token' : token,
        'email' : email,
        'password' : passw,
        'password_confirmation' : passw2,
    }
    swal.showLoading()
    api
    .post("api/reset-password", data)
    .then((res) => {
      console.log(res);
      if (res.data.email == "This password reset token is invalid.") {
        swal.fire({
          title: <strong>Gagal !</strong>,
          html: <i>Token invalid, cek email dan token !</i>,
          icon: "error",
        });
      } else {
        swal.fire({
          title: <strong>Berhasil !</strong>,
          html: <i>Password telah diubah !</i>,
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
                      <img src={Logo} width="90" />
                      <h1 className="h4 text-gray-900 mb-4">Reset Password</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group mb-1">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="form-group mb-1">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="passw"
                          placeholder="Password Baru"
                          required
                        />
                      </div>
                      <div className="form-group mb-1">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="passw2"
                          placeholder="Confirm Password"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <div className="text-end">
                          <Link
                            className="small"
                            to="/login"
                            style={{
                              textDecoration: "none",
                            }}
                          >
                            Kembali ke login
                          </Link>
                          <br />
                        </div>
                      </div>
                      <input
                        className="btn btn-primary btn-user mx-auto btn-block"
                        type="submit"
                        value="Submit"
                      />
                    </form>
                    <br />
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

export default ResetPass;
