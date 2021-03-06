import api from "../api.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Regis(props) {
  const swal = withReactContent(Swal);
  let [error, setError] = useState([]);
  const [show, setShow] = useState(false);
  const isiSnk = `
  1. KETENTUAN UTAMA
  Penyewa menggunakan peralatan tidak untuk kegiatan yang melanggar hukum negara & norma agama. Penyewa tidak akan memindahtangankan alat yang disewa kepada pihak lain. Penyewa ketika melakukan order telah memahami fungsi alat yang disewa. Jika terjadi kerusakan atau kehilangan atas alat yang disewa maka Penyewa sanggup mengganti sepenuhnya.
    
  2. PROSEDUR SEWA
  Penyewa mendaftar sebelum menyewa alat. Setiap sewa ada jaminan, berupa nilai deposit atau pengawal alat (nilainya bisa dilihat di deskripsi produk). Perhitungan dasar harga sewa peralatan adalah pertanggal dengan waktu 24 jam. Alat yang disewa dapat diambil ketika pembayaran telah diselesaikan.
  ​
  3. PENGAMBILAN & PENGEMBALIAN ALAT
  Waktu operasional store untuk pengambilan & pengembalian alat adalah setiap hari, 24 jam. Penyewa bersedia mengambil alat sendiri dan mengembalikan alat tepat waktu.
  `

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let nama = e.target.namaLengkap.value;
    let email = e.target.email.value;
    let noTelp = e.target.noTelp.value;
    let alamat = e.target.alamat.value;
    let passw = e.target.passw.value;
    let passw2 = e.target.passw2.value;

    let data = {
      nama_lengkap: nama,
      email: email,
      phone: noTelp,
      alamat: alamat,
      password: passw,
      password_confirmation: passw2,
    };
    swal.showLoading();
    api
      .post("api/register", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        swal.fire({
          title: <strong>Berhasil Register !</strong>,
          html: <i>tekan ok untuk melanjutkan</i>,
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((err) => {
        swal.fire({
          title: <strong>Gagal Mendaftar !</strong>,
          html: <i>Terdapat kesalahan</i>,
          icon: "error",
        });
        setError(err.response.data.errors);
        setShow(true);
      });
  };

  const sNk = () => {
    Swal.fire({
      title: 'Syarat dan ketentuan!',
      text: isiSnk,
    })
  }

  return (
    <div className="container">
      <Alert
        show={show}
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Error</Alert.Heading>
        <p>
          <ul>
            {error.nama_lengkap
              ? error.nama_lengkap.map((item) => <li>{item}</li>)
              : ""}
            {error.phone ? error.phone.map((item) => <li>{item}</li>) : ""}
            {error.email ? error.email.map((item) => <li>{item}</li>) : ""}
            {error.password
              ? error.password.map((item) => <li>{item}</li>)
              : ""}
          </ul>
        </p>
      </Alert>
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Register</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="namaLengkap"
                          aria-describedby="namaLengkapHelp"
                          placeholder="Nama Lengkap"
                          required
                        />
                      </div>
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
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-user"
                          id="noTelp"
                          aria-describedby="noTelpHelp"
                          placeholder="No Telepon"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="alamat"
                          aria-describedby="noTelpHelp"
                          placeholder="Alamat"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="passw"
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="passw2"
                          placeholder="Konfirmasi Password"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                            required
                          />
                          <label class="custom-control-label" for="customCheck">
                            Saya telah membaca dan memahami{" "}
                            <a onClick={sNk} style={{ textDecoration: "none", color: '#1890ff', cursor: 'pointer' }}>
                              <b>syarat dan ketentuan</b>
                            </a>{" "}
                            yang berlaku.
                          </label>
                        </div>
                      </div>
                      <input
                        className="btn btn-primary btn-user btn-block"
                        type="submit"
                        value="Daftar"
                      />
                    </form>
                    <br/>
                    <div className="text-center">
                      <p className="small">
                        Sudah punya akun?
                        <Link to="/login" style={{
                              textDecoration: "none",
                            }}>
                          <b> Login</b>
                        </Link>
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
  );
}

export default Regis;
