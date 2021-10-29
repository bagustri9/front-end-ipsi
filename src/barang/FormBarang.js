import { useForm } from "react-hook-form";
import api from "../api.js";

function FormBarang() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const simpan = (data) => {
    api.post("/barang",data).then((res)=>{
        reset()
    });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Tambah Data
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit(simpan)}>
              <div className="modal-body">
                <div className="mb-3 row">
                  <label className="form-label">Nama Barang</label>
                  <div className="col-sm-12">
                    <input
                      {...register("nama_barang", { required: true })}
                      type="text"
                      className="form-control"
                      placeholder = "Nama Barang"
                    />
                    {errors.nama_barang?.type === "required" && (
                      <div className="text-danger">Nama barang is required</div>
                    )}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="form-label">Tipe Barang</label>
                  <div className="col-sm-12">
                    <input
                      {...register("tipe_barang", { required: true })}
                      type="text"
                      className="form-control"
                      placeholder = "Tipe Barang"
                    />
                    {errors.tipe_barang?.type === "required" && (
                      <div className="text-danger">
                        {" "}
                        Tipe Barang is required{" "}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="form-label">Kuantitas</label>
                  <div className="col-sm-12">
                    <input
                      {...register("kuantitas", { required: true })}
                      type="number"
                      className="form-control"
                      placeholder = "Kuantitas"
                    />
                    {errors.kuantitas?.type === "required" && (
                      <div className="text-danger"> Kuantitas is required </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="form-label">Harga Rental</label>
                  <div className="col-sm-12">
                    <input
                      {...register("harga_rental", { required: true })}
                      type="number"
                      className="form-control"
                      placeholder = "Harga Rental"
                    />
                    {errors.harga_rental?.type === "required" && (
                      <div className="text-danger">
                        {" "}
                        Harga Rental is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="form-label">Deskripsi</label>
                  <div className="col-sm-12">
                    <textarea
                      {...register("deskripsi", { required: true })}
                      type="text"
                      className="form-control"
                      placeholder = "Deskripsi"
                    />
                    {errors.deskripsi?.type === "required" && (
                      <div className="text-danger">Deskripsi is required</div>
                    )}
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="form-label">Gambar</label>
                  <div className="col-sm-12">
                    <input
                      {...register("gambar", { required: true })}
                      className="form-control"
                      name="gambar"
                    //   type="file"
                    //   accept="image/png, image/jpeg"
                    //   id="formFileMultiple"
                    //   multiple
                    />
                    {errors.gambar?.type === "required" && (
                      <div className="text-danger">Gambar is required</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormBarang;
