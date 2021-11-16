import Judul from "../menubar/judul"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabelPeminjaman from "./TabelPeminjaman"
import TabelRental from "./TabelRental"
import TabelPengembalian from "./TabelPengembalian"

const DaftarPeminjaman = () => {

  return (
    <>
      <Judul title="Kelola Peminjaman" info="Kelola seluruh peminjaman!" />
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="unpaid" title="Peminjaman">
          <TabelPeminjaman/>
        </Tab>
        <Tab eventKey="rent" title="Berlangsung">
          <TabelRental/>
        </Tab>
        <Tab eventKey="rented" title="Telah Dikembalikan">
          <TabelPengembalian/>
        </Tab>
      </Tabs>
    </>
  )
}

export default DaftarPeminjaman