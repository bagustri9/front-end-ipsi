import api from "../api.js";
import {BrowserRouter as Router} from "react-router-dom";
import Logo from '../assets/img/logo.png'

function Forgot(props) {

  const handleSubmit = async(e) => {
    e.preventDefault()

    let nama = e.target.namaLengkap.value
    let email = e.target.email.value
    let noTelp = e.target.noTelp.value
    let passw = e.target.passw.value
    let passw2 = e.target.passw2.value
    
    console.log(noTelp)
    passw === passw2 ? console.log("SAMA") : console.log("TIDAK")
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
                        <h1 className="h4 text-gray-900 mb-4">Lupa Password</h1>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="namaLengkap"
                            aria-describedby="namaLengkapHelp"
                            placeholder="Nama Lengkap" required/></div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Email" required/></div>
                        <input className="btn btn-primary btn-user btn-block" type="submit" value="Cek Password"/>
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
    </Router>
  )
}

export default Forgot;