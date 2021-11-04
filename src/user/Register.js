import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import api from "../api.js";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Register() {
  const swal = withReactContent(Swal);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const config = {
    headers: { "content-type": "application/json", "Accept": "application/json" },
  };

  const simpan = (input) => {
    console.log(input);
    api.get("/sanctum/csrf-cookie").then((response) => {
      api.post("/api/register", input, config).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.name);
          swal.fire({
            title: <strong>Sukses !</strong>,
            html: <i>Registrasi Berhasil !</i>,
            icon: "success",
          });
          reset();
        }
      });
    });
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6">
          <div className="card rounded-3">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img3.jpg"
              className="w-100"
              style={{
                borderTopLeftRadius: ".3rem",
                borderTopRightRadius: ".3rem",
              }}
              alt="Sample photo"
            />
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                Registration Info
              </h3>
              <Form onSubmit={handleSubmit(simpan)} className="px-md-2">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    {...register("username", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1q">
                    Username
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1q">
                    Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    {...register("password", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1q">
                    Password
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    {...register("password_confirmation", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1q">
                    Confirm Password
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    {...register("nama_lengkap", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1q">
                    Nama Lengkap
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    {...register("phone", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1q">
                    Phone
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    {...register("alamat", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1q">
                    Alamat
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    {...register("gender", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1q">
                    Gender
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="date"
                    {...register("tanggal_hahir", { required: true })}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1q">
                    Tanggal Lahir
                  </label>
                </div>
                <button type="submit" className="btn btn-success btn-lg mb-1">
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
