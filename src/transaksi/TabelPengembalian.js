import { Col, Table, Row, Modal } from "react-bootstrap"
import { BsXCircleFill, BsFillCheckCircleFill } from "react-icons/bs"
import Spinner from "react-bootstrap/Spinner"
import { useState, useEffect } from "react"
import withReactContent from "sweetalert2-react-content"
import api from "../api.js"
import Swal from "sweetalert2"

const TabelPeminjaman = () => {

    const [datas, setDatas] = useState([])
    const [isLoading, setLoading] = useState()
    const swal = withReactContent(Swal)
    const fetchData = async () => {
        setLoading(true)
        let request = await api.get("api/pengembalian")
        setDatas(request.data)
        setLoading(false)
    }

    const detailData = (id) => {
        console.log(id)
      }

      const editModal = (tipe, data) => {
        console.log("edit")
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

    return(
<Col sm={12} className="mx-auto card shadow px-3 py-3">
        <Table striped bordered hover size="md">
          <thead>
            <tr>
              <th scope="col" className="tableDataCenter">No</th>
              <th scope="col">Nama Peminjam</th>
              <th scope="col">Tanggal Peminjaman</th>
              <th scope="col">Tanggal Pengembalian</th>
              <th scope="col">Denda</th>
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
                <tr key={i} >
                  <td
                    onClick={() => detailData(items.id)}
                    style={{ cursor: "pointer" }}
                    className="tableDataCenter"
                  >
                    {i + 1}
                  </td>
                  <td
                    onClick={() => detailData(items.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {items.info.nama_lengkap}
                  </td>
                  <td
                    onClick={() => detailData(items.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {items.barang.tanggal_rental}
                  </td>
                  <td
                    onClick={() => detailData(items.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {items.pengembalian}
                  </td>
                  <td
                    onClick={() => detailData(items.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {items.denda}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Col>
    )
}

export default TabelPeminjaman