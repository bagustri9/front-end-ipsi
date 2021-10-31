import { useForm} from "react-hook-form";
import api from "../api.js";
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect, useImperativeHandle, forwardRef} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const FormBarang = forwardRef((props,ref) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);
  const [type, setType] = useState("create");
  const [id, setId] = useState(0);
  const getData = async (id) => {
    let request = await api.get("/barang/"+id);
    setData(request.data);
    console.log(data)
  };

  useImperativeHandle(ref, () => ({
    handleShow(param,id){
      setType(param)
      setShow(true)
      if(param!=="create"){
        setId(id);
        getData(id)
      }
    }
  }))

  const MySwal = withReactContent(Swal);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const simpan = (data) => {
    api.post("/barang", data).then((res) => {
      setShow(false);
      MySwal.fire({
        title: <strong>Sukses !</strong>,
        html: <i>Data Berhasil Ditambah !</i>,
        icon: "success",
      });
      reset();
      props.refresh();
    });
  };

  const edit = (data) => {
    // console.log(data,id)
    api.put("/barang/"+id+"/update", data).then((res) => {
      setShow(false);
      MySwal.fire({
        title: <strong>Sukses !</strong>,
        html: <i>Data Berhasil Diupdate !</i>,
        icon: "success",
      });
      reset();
      props.refresh();
    });
  }

  return (
    <div>
      <Modal show={show}>
        <Modal.Header closeButton onClick={() => setShow(false)}>
          <Modal.Title>{type==="create"?"Tambah":"Edit"} Data Barang</Modal.Title>
        </Modal.Header>
        <Form onSubmit={type==="create"?handleSubmit(simpan):handleSubmit(edit)}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                {...register("nama_barang", { required: true })}
                type="text"
                placeholder="Nama Barang"
                defaultValue = {data.nama_barang}
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
              />
              {errors.deskripsi?.type === "required" && (
                <Form.Text className="text-danger">
                  Deskripsi is required
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gambar</Form.Label>
              <Form.Control
                {...register("gambar", { required: true })}
                name="gambar"
                //   type="file"
                //   accept="image/png, image/jpeg"
                //   id="formFileMultiple"
                //   multiple
              />
              {errors.gambar?.type === "required" && (
                <Form.Text className="text-danger">
                  Gambar is required
                </Form.Text>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close Modal
            </Button>
            <Button type="submit" className="btn btn-primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
})
export default FormBarang;
