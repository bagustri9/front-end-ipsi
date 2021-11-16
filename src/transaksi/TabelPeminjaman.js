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
        let request = await api.get("api/peminjamans")
        let unpaid = request.data.filter((item => item.status === 0))
        setDatas(unpaid)
        setLoading(false)
    }

    const detailData = (id) => {
        console.log(id)
      }

      const diBayar = (data) => {
        data.status = 1

        swal.fire({
            title: "Apakah pembayaran sudah lunas?",
            text: "Pastikan semua keperluan peminjaman telah terpenuhi!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, lunas!",
        })
        .then((result) => {
            if (result.isConfirmed) {
                api.post(`api/peminjamans/${data.id}/update`, data, config).then(() => {
                swal
                .fire("Berhasil!", "Barang berhasil dipinjam!", "success")
                .then(() => {
                    fetchData()
                })
            })
            } else if (result.dismiss === swal.DismissReason.cancel) {
            swal.fire("Cancelled", "Pastikan semua keperluan terpenuhi!", "error")
            }
        })
        .catch((err) => {
            swal.fire("Failed to Delete!", "Error :" + err, "error")
        })
      }

      const diHapus = (data) => {
        swal.fire({
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
            api.get("api/peminjamans/" + data.id + "/delete").then(() => {
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

      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      useEffect(() => {
        fetchData()
      }, [])

    return(
<Col sm={12} className="mx-auto card shadow px-3 py-3">
        <Table striped bordered hover size="md">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Tanggal Peminjaman</th>
              <th scope="col">Nama Peminjam</th>
              <th scope="col">Jumlah Peminjaman</th>
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
                <tr key={i} >
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
                    {items.tanggal_rental}
                  </td>
                  <td
                    onClick={() => detailData(items.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {items.peminjam.nama_lengkap}
                  </td>
                  <td
                    onClick={() => detailData(items.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {items.cart.length} Barang, Rp{items.total}
                  </td>
                  <td>
                    <div className="float-end">
                      <BsFillCheckCircleFill
                        className="mx-1"
                        color="green"
                        style={{ cursor: "pointer" }}
                        onClick={() => diBayar(items)}
                      />
                      <BsXCircleFill
                        className="mx-1"
                        color="red"
                        style={{ cursor: "pointer" }}
                        onClick={() => diHapus(items)}
                      />
                    </div>
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