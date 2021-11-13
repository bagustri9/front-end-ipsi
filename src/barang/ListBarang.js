import { useState, useEffect } from "react"
import api from "../api.js"
import FormBarang from "./FormBarang.js"
import { Col, Table, Row, Button, Modal } from "react-bootstrap"
import { BsXCircleFill, BsFillPencilFill } from "react-icons/bs"
import Spinner from "react-bootstrap/Spinner"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import Judul from "../menubar/judul"
import {useContext} from "react"
import { BarangContext } from "../barang/BarangContext"

const ListBarang = () => {
const {keranjang, setKeranjang, barang, setBarang} = useContext(BarangContext)

  const [show, setShow] = useState(false)
  const [datas, setDatas] = useState([])
  const [type, setType] = useState()
  const [isLoading, setLoading] = useState()
  const [editData, setEditData] = useState()
  const swal = withReactContent(Swal)
  const fetchData = async () => {
    setLoading(true)
    let request = await api.get("api/barang")
    setDatas(request.data)
    setBarang(request.data)
    setLoading(false)
  }
  const createModal = (tipe) => {
    setType(tipe)
    setShow(true)
    setEditData([])
  }
  const editModal = (tipe, data) => {
    setEditData(data)
    setType(tipe)
    setShow(true)
  }
  const toggleModal = (param) => {
    setShow(param)
  }
  const detailData = (id) => {
    console.log(id)
  }
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
          api.get("api/barang/" + id + "/delete").then(() => {
            swal
              .fire("Deleted!", "Data berhasil dihapus!", "success")
              .then(() => {
                fetchData()
              })
          })
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire("Cancelled", "Batal Menghapus Data :)", "error")
        }
      })
      .catch((err) => {
        swal.fire("Failed to Delete!", "Error :" + err, "error")
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Judul title="Kelola Barang" info="Atur barang apa saja yang siap direntalkan!" />
      <Col sm={12} className="mx-auto card shadow mb-4">
        <Row className="mt-4 mb-3">
          <Col sm={{ span: 3, offset: 9 }}>
            <Button
              className="col-12"
              variant="primary"
              onClick={() => createModal("create")}
            >
              Tambah Data
            </Button>
          </Col>
          <Modal show={show}>
            <Modal.Header closeButton onClick={() => setShow(false)}>
              <Modal.Title>
                {type === "create" ? "Tambah" : "Edit"} Data Barang
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormBarang
                refresh={fetchData}
                modal={() => toggleModal()}
                type={type}
                data={editData}
              />
            </Modal.Body>
          </Modal>
        </Row>
        <Table striped bordered hover size="md">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Barang</th>
              <th scope="col">Tipe Barang</th>
              <th scope="col">Kuantitas</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5" align="center">
                  <Spinner animation="border" />
                </td>
              </tr>
            ) : (
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
                  <td
                    onClick={() => detailData(items.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {items.kuantitas}
                  </td>
                  <td>
                    <div className="float-end">
                      <BsFillPencilFill
                        className="mx-1"
                        color="green"
                        style={{ cursor: "pointer" }}
                        onClick={() => editModal("edit", items)}
                      />
                      <BsXCircleFill
                        className="mx-1"
                        color="red"
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteData(items.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Col>
    </>
  )
}

export default ListBarang
