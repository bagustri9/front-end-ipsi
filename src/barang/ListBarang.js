import { useState, useEffect, useRef } from "react";
import api from "../api.js";
import FormBarang from "./FormBarang.js";
import { Col, Table, Row, Button } from "react-bootstrap";
import { BsXCircleFill, BsFillPencilFill } from "react-icons/bs";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ListBarang() {
  const [datas, setDatas] = useState([]);
  const swal = withReactContent(Swal);
  const fetchData = async () => {
    let request = await api.get("/barang");
    setDatas(request.data);
  };
  const createModal = useRef();
  const detailData = (id) => {
    console.log(id);
  };
  const deleteData = (id) => {
    swal
      .fire({
        title: "Apakah anda yakin ?",
        text: "Data yang dihapus tidak dapat dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, hapus data!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          api.get("/barang/" + id + "/delete").then(() => {
            swal
              .fire("Deleted!", "Data berhasil dihapus!", "success")
              .then(() => {
                fetchData();
              });
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire("Cancelled", "Batal Menghapus Data :)", "error");
        }
      })
      .catch((err) => {
        swal.fire("Failed to Delete!", "Error :" + err, "error");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Col sm={8} className="mx-auto">
      <Row className="mt-4 mb-3">
        <Col sm={8}>
          <h3>List Barang</h3>
        </Col>
        <Col sm={4}>
          <Button
            className="float-end"
            variant="primary"
            onClick={() => createModal.current.handleShow("create")}
          >
            Tambah Data
          </Button>
          <FormBarang ref={createModal} refresh={fetchData} />
        </Col>
      </Row>
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Barang</th>
            <th scope="col">Tipe Barang</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas ? (
            datas.map((items, i) => (
              <tr key={i}>
                <td
                  onClick={() => detailData(items.id)}
                  style={{ cursor: "pointer" }}
                >
                  {i + 1}
                </td>
                <td
                  onClick={() => detailData(items.id)}
                  style={{ cursor: "pointer" }}
                >
                  {items.nama_barang}
                </td>
                <td
                  onClick={() => detailData(items.id)}
                  style={{ cursor: "pointer" }}
                >
                  {items.tipe_barang}
                </td>
                <td>
                  <div className="float-end">
                  <BsFillPencilFill
                  className = "mx-1"
                    color="green"
                    style={{ cursor: "pointer" }}
                    onClick={() => createModal.current.handleShow("edit",items.id)}
                  />
                  <BsXCircleFill
                  className = "mx-1"
                    color="red"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteData(items.id)}
                  />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td> Data Kosong</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Col>
  );
}

export default ListBarang;
