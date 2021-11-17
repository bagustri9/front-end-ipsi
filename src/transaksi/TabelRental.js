import { Col, Table, Row, Modal } from "react-bootstrap"
import { BsFillCheckCircleFill } from "react-icons/bs"
import Spinner from "react-bootstrap/Spinner"
import { useState, useEffect } from "react"
import withReactContent from "sweetalert2-react-content"
import api from "../api.js"
import Swal from "sweetalert2"

const TabelRental = () => {

    const [datas, setDatas] = useState([])
    const [isLoading, setLoading] = useState()
    const swal = withReactContent(Swal)

    const fetchData = async () => {
        setLoading(true)
        let request = await api.get("api/peminjamans")
        let unpaid = request.data.filter((item => item.status === 1))
        setDatas(unpaid)
        setLoading(false)
    }

    const detailData = (id) => {
        console.log(id)
      }

      const editData = (data) => {
        swal.fire({
          title: "Apakah barang sudah dikembalikan ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya, sudah!",
          cancelButtonText: "Belum"
      })
      .then((result) => {
          if (result.isConfirmed) {
            let dikembalikan = {
              peminjaman_id: data.id,
              pengembalian: new Date().toISOString().split("T")[0],
              denda: 0
            }
            api.post(`api/pengembalian`, dikembalikan, config).then((res) => {
              fetchData()
            })
          } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire("Belum", "Barang belum dikembalikan", "error")
          }
      })
      .catch((err) => {
          swal.fire("Kesalahan pemindahan barang!", "Error :" + err, "error")
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
              <th scope="col" className="tableDataCenter">No</th>
              <th scope="col">Tanggal Peminjaman</th>
              <th scope="col">Rencana Pengembalian</th>
              <th scope="col">Nama Peminjam</th>
              <th scope="col">Jumlah Peminjaman</th>
              <th scope="col" className="tableDataCenter">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6" align="center">
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
                    {items.rencana_pengembalian}
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
                    <div className="tableDataCenter">
                      <BsFillCheckCircleFill
                        className="mx-1"
                        color="green"
                        style={{ cursor: "pointer" }}
                        onClick={() => editData(items)}
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

export default TabelRental