import api from "../api.js";
import {BrowserRouter as Router} from "react-router-dom";
import Logo from '../assets/img/logo.png'
import { useCookies } from 'react-cookie'

function Login(props) {

  const [cookies, setCookies] = useCookies(["authentication", "token"])

  const handleSubmit = async(e) => {
    e.preventDefault()

    let email = e.target.email.value
    let passw = e.target.passw.value
    let data = {
      email: email,
      password: passw
    }
    let result = await api.post(`/api/login/`, data).then(res => {
      console.log(res.data)
      // setCookies(["authentication", res.data])
    })
  }

  return (
    <Router>
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
                        <img src={Logo} width="90"/>
                        <h1 className="h4 text-gray-900 mb-4">Login</h1>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Email" required/></div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="passw"
                            placeholder="Password" required/></div>
                        <div className="form-group">
                          <div className="text-end">
                            <a
                              className="small"
                              href="forgot-password.html"
                              style={{
                              textDecoration: 'none'
                            }}>
                              Lupa Password?
                            </a>
                            <br/>
                          </div>
                        </div>
                        <input className="btn btn-primary btn-user btn-block" type="submit" value="Login"/>
                      </form>
                      <hr/>
                      <div className="text-center">
                        <p className="small">
                          Belum punya akun?
                          <a
                            href=""
                            style={{
                            textDecoration: 'none'
                          }}>
                            <b> Daftar!</b>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Login;