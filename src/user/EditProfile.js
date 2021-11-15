import PhotoEdit from "../components/PhotoEdit";
import Judul from "../menubar/judul";
import { BsPerson, BsFillCameraFill } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
import api from "../api";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../assets/css/editProfile.css";
import Swal from "sweetalert2"

const EditProfile = () => {
  let [show, setShow] = useState(false);
  let [user, setUser] = useState({ image: null });

  let [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let password = e.target.password.value;
    let password_confirmation = e.target.password_confirmation.value;

    let data = {
      email: e.target.email.value,
      password: password,
      role: "User",
      nama_lengkap: e.target.nama_lengkap.value,
      phone: e.target.phone.value,
      alamat: e.target.alamat.value,
      gender: e.target.gender.value,
      tanggal_hahir: e.target.tanggal_hahir.value,
    }

    if(password === password_confirmation) {
      console.log(config)
      api.post(`/api/user/${user.id}/update` , data, config).then(res => {
        getProfile()
      })
        infoSwal("Berhasil Diperbarui", "success")
    } else {
      infoSwal("Password tidak sama", "error")
    }
  };

  const infoSwal = (text, info) => {
    Swal.fire({
        icon: info,
        title: text,
        showConfirmButton: false,
        timer: 1500
      })
  }
  const getProfile = async () => {
    setLoading(true);
    let user = JSON.parse(localStorage.getItem("user"));
    let request = await api.get("api/user/" + user.id, config);
    setUser(request.data);
    setLoading(false);
  };

  const toggleModal = (param) => {
    setShow(param);
  };

  useEffect(() => {
    getProfile();
  }, []);
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  return (
    <>
      <Judul title="Profile" info="Ubah profile sesuai keinginanmu!" />
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <div className="row">
            <div className="col-10">
              <h4 class="m-0 font-weight-bold text-primary">
                {loading ? <Spinner animation="border" /> : user.nama_lengkap}
              </h4>
            </div>
          </div>
        </div>
        <Modal show={show} size="lg">
          <Modal.Header closeButton onClick={() => setShow(false)}>
            <Modal.Title>Edit Foto Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PhotoEdit
              refresh={() => getProfile()}
              modal={() => toggleModal()}
              data={user}
            />
          </Modal.Body>
        </Modal>
        <div class="card-body row">
          <div className="col-md-4 col-sm-12 position-relative">
            <div className="img-wrapper">
              {user.image ? (
                <img src={user.gambar} className="img-responsive col-12"/>
              ) : (
                <BsPerson classname="img-responsive" size="lg" />
              )}
              <div className="img-overlay">
                  <BsFillCameraFill
                    size="sm"
                    onClick={() => setShow(true)}
                    style={{ cursor: "pointer", width: "100px",color:"white" }}
                  />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nama Lengkap"
                  id="nama_lengkap"
                  defaultValue={user.nama_lengkap}
                  required
                />
              </div>
              
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  id="email"
                  defaultValue={user.email}
                  required
                />
              </div>
              
              <div class="input-group mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Nomor Telepon"
                  id="phone"
                  defaultValue={user.phone}
                  required
                />
              </div>
              
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Alamat"
                  id="alamat"
                  defaultValue={user.alamat}
                  required
                />
                </div>
                
              <div class="input-group mb-3">
                <select
                  class="form-control"
                  placeholder="Gender"
                  id="gender"
                  defaultValue={user.gender}
                  required
                >
                  <option value='L'>Laki-laki</option>
                  <option value='P'>Perempuan</option>
                </select>
              </div>

              <div class="input-group mb-3">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Tanggal Lahir"
                  id="tanggal_hahir"
                  defaultValue={user.tanggal_hahir}
                  required
                />
              </div>

              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  id="password"
                  defaultValue={user.password}
                  required
                />
              </div>

              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Konfirmasi Password"
                  id="password_confirmation"
                  defaultValue={user.password}
                  required
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary float-end">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
