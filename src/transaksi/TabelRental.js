import { Col, Table, Row, Modal } from "react-bootstrap"
import { BsFillCheckCircleFill } from "react-icons/bs"
import Spinner from "react-bootstrap/Spinner"
import { useState, useEffect, useContext } from "react"
import withReactContent from "sweetalert2-react-content"
import api from "../api.js"
import Swal from "sweetalert2"
import { BarangContext } from "../barang/BarangContext.js"

const TabelRental = (props) => {

    const [isLoading, setLoading] = useState()
    const swal = withReactContent(Swal)
    let datas = props.isi.filter((item => item.status == 1))

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
            let d1 =  new Date(data.rencana_pengembalian)
            let d2 = new Date(new Date().toISOString().split('T')[0]);
            let diff = (d2-d1)/3600000/24
            let dikembalikan = {
              peminjaman_id: data.id,
              pengembalian: new Date().toISOString().split("T")[0],
              denda: diff > 0 ? diff * 100000 : 0
            }
            api.post(`api/pengembalian`, dikembalikan, config).then((res) => {
              swal
                .fire("Berhasil!", "Barang telah dikembalikan!", "success")
                .then(() => {
                  props.refresh()
                })
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
            ) : (datas.length !== 0 ? (
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
            ) : (
              <tr>
                <td colSpan="6" align="center">
                  Tidak ada invoice peminjaman
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    )
}

export default TabelRental