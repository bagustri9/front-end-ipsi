import Judul from "../menubar/judul"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabelPeminjaman from "./TabelPeminjaman"
import TabelRental from "./TabelRental"
import TabelPengembalian from "./TabelPengembalian"
import { useState, useEffect } from 'react'
import api from "../api.js"

const DaftarPeminjaman = () => {

  const [datas, setDatas] = useState([])
  const [pengembalian, setPengembalian] = useState([])
  const [fetch, setFetch] = useState(true)

  const refresh = () => {
    setFetch(true)
  }

  useEffect(() => {
    const getData = async() => {
      await api.get("api/peminjamans").then((res) => {
        setDatas(res.data)
      })
    }

    const getPengembalian = async() => {
      await api.get("api/pengembalian").then((res) => {
        setPengembalian(res.data)
      })
    }

    if(fetch) {
      getData()
      getPengembalian()
      setFetch(false)
      console.log("Tes")
    }
  })

  return (
    <>
      <Judul title="Kelola Peminjaman" info="Kelola seluruh peminjaman!" />
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="unpaid" title="Peminjaman">
          <TabelPeminjaman isi={datas} refresh={refresh}/>
        </Tab>
        <Tab eventKey="rent" title="Berlangsung">
          <TabelRental isi={datas} refresh={refresh}/>
        </Tab>
        <Tab eventKey="rented" title="Telah Dikembalikan">
          <TabelPengembalian isi={pengembalian} refresh={refresh}/>
        </Tab>
      </Tabs>
    </>
  )
}

export default DaftarPeminjaman