import PhotoEdit from "../components/PhotoEdit";
import Judul from "../menubar/judul";
import { BsPerson, BsFillCameraFill } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
import api from "../api";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../assets/css/editProfile.css";

const EditProfile = () => {
  let [show, setShow] = useState(false);
  let [user, setUser] = useState({ image: null });
  let [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let nama = e.target.namaLengkap.value;
    let email = e.target.email.value;
    let noTelp = e.target.noTelp.value;
    let passw = e.target.passw.value;
    let passw2 = e.target.passw2.value;
  };
  const getProfile = async () => {
    setLoading(true);
    let user = JSON.parse(localStorage.getItem("user"));
    let request = await api.get("api/user/" + user.id, config);
    setUser(request.data);
    setLoading(false);
    console.log("test");
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
            <div className="col-2">
              <button type="button" class="btn btn-primary float-end">
                Update Profile
              </button>
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
              {user.gambar ? (
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
                <span class="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
