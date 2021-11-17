import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from 'react-bootstrap/Badge'
import Auth from "../components/Auth";
import Judul from "../menubar/judul";
import api from "../api"
import {useState, useEffect} from "react"

const History = () => {

  const [riwayat, setRiwayat] = useState([])

  let user = JSON.parse(localStorage.getItem("user"));


  const fetchRiwayat = async() => {
    console.log(user.id)
    await api.get(`/api/peminjaman/user/${user.id}`).then((res) => {
      setRiwayat(res.data)
      console.log(res.data)
      console.log(riwayat)
    })
  }

  useEffect(() => {
    fetchRiwayat()
  }, [])

  return (
    <>
      <Judul
        title="Riwayat Peminjaman Barang"
        info="Temukan informasi riwayat peminjamanmu!"
      />
      <Card>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Barang</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {riwayat.map((arr, idx) => {
              return(
                <tr>
                  <td>{idx + 1}</td>
                  <td>{arr.tanggal_rental}</td>
                  <td>
                  {arr.cart.map((isi) => {
                    return(
                      isi.nama_barang + ", "
                    )
                  })}
                  </td>
                  <td>{arr.status === 0 ? (<Badge bg="warning" text="dark">Belum Dibayar</Badge>) 
                  : arr.status === 1 ? (<Badge bg="primary">Sedang Dipinjam</Badge>) 
                  : (<Badge bg="success">Telah Dikembalikan</Badge>)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default History;
