import { useForm } from "react-hook-form";
import api from "../api.js";
import { Form, Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function FormBarang({ refresh, type, modal, data }) {
  const MySwal = withReactContent(Swal);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const simpan = (data) => {
    api.post("/barang", data).then((res) => {
      modal(false);
      MySwal.fire({
        title: <strong>Sukses !</strong>,
        html: <i>Data Berhasil Ditambah !</i>,
        icon: "success",
      });
      reset();
      refresh();
    });
  };
  const edit = (bahan) => {
    api.put("/barang/" + data.id + "/update", bahan).then((res) => {
      modal(false);
      MySwal.fire({
        title: <strong>Sukses !</strong>,
        html: <i>Data Berhasil Diupdate !</i>,
        icon: "success",
      });
      reset();
      refresh();
    });
  };

  return (
    <div>
      <Form
        onSubmit={type === "create" ? handleSubmit(simpan) : handleSubmit(edit)}
      >
        <Form.Group className="mb-3">
          <Form.Label>Nama Barang</Form.Label>
          <Form.Control
            {...register("nama_barang", { required: true })}
            type="text"
            placeholder="Nama Barang"
            defaultValue={data.nama_barang}
          />
          {errors.nama_barang?.type === "required" && (
            <Form.Text className="text-danger">
              Nama barang is required
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tipe Barang</Form.Label>
          <Form.Control
            {...register("tipe_barang", { required: true })}
            type="text"
            placeholder="Tipe Barang"
            defaultValue={data.tipe_barang}
          />
          {errors.tipe_barang?.type === "required" && (
            <Form.Text className="text-danger">
              {" "}
              Tipe Barang is required{" "}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Kuantitas</Form.Label>
          <Form.Control
            {...register("kuantitas", { required: true })}
            type="number"
            placeholder="Kuantitas"
            defaultValue={data.kuantitas}
          />
          {errors.kuantitas?.type === "required" && (
            <Form.Text className="text-danger">
              {" "}
              Kuantitas is required{" "}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Harga Rental</Form.Label>
          <Form.Control
            {...register("harga_rental", { required: true })}
            type="number"
            placeholder="Harga Rental"
            defaultValue={data.harga_rental}
          />
          {errors.harga_rental?.type === "required" && (
            <Form.Text className="text-danger">
              {" "}
              Harga Rental is required
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            {...register("deskripsi", { required: true })}
            type="text"
            as="textarea"
            placeholder="Deskripsi"
            defaultValue={data.deskripsi}
          />
          {errors.deskripsi?.type === "required" && (
            <Form.Text className="text-danger">Deskripsi is required</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gambar</Form.Label>
          <Form.Control
            {...register("gambar", { required: true })}
            name="gambar"
            defaultValue={data.gambar}
            //   type="file"
            //   accept="image/png, image/jpeg"
            //   id="formFileMultiple"
            //   multiple
          />
          {errors.gambar?.type === "required" && (
            <Form.Text className="text-danger">Gambar is required</Form.Text>
          )}
        </Form.Group>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => modal(false)}>
          Close Modal
        </Button>
        <Button type="submit" className="btn btn-primary">
          Save changes
        </Button>
        </Modal.Footer>
      </Form>
    </div>
  );
}
export default FormBarang;
