import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Judul from "../menubar/judul";
import { useContext } from "react";
import { BarangContext } from "../barang/BarangContext";
import api from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Cookies from "js-cookie";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Peminjaman = () => {
  const swal = withReactContent(Swal);
  const { keranjang, setKeranjang } = useContext(BarangContext);
  let user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();


  const meminjam = (e) => {
    e.preventDefault();

    if(keranjang.length === 0 ) {
      successSwal("Keranjang Kosong", "warning")
    } else {
      let name = e.target.name.value;
      let email = e.target.email.value;
      let phone = e.target.phone.value;
      let alamat = e.target.alamat.value;
      let durasi = e.target.durasi.value;
      let jaminan = e.target.jaminan.value;
  
      var date = new Date();
      var today = date.toISOString().split("T")[0];
      var pengembalian = new Date(
        date.setDate(date.getDate() + Number.parseInt(durasi))
      )
        .toISOString()
        .split("T")[0];
  
      let peminjaman = {
        user_id: user.id,
        total: totalHarga(),
        barang_jaminan: jaminan,
        tanggal_rental: today,
        rencana_pengembalian: pengembalian,
        cart : keranjang
      };
      swal.showLoading();
      api
        .post(`api/peminjaman`, peminjaman, config)
        .then((res) => {
          swal
            .fire({
              title: <strong>Berhasil Meminjam !</strong>,
              html: <i>peminjaman berhasil !</i>,
              icon: "success",
            })
            .then(() => {
              Cookies.remove('cart')
              setKeranjang([])
              navigate("/");
            });
        })
        .catch((err) => {
          swal.fire({
            title: <strong>Gagal Meminjam !</strong>,
            html: <i>Terdapat kesalahan</i>,
            icon: "error",
          });
        });
    }
  };

  const totalHarga = () => {
    let total = 0;
    keranjang.map((arr) => {
      total += arr.harga_rental;
    });
    return total;
  };
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const successSwal = (text, ico) => {
    Swal.fire({
        icon: ico,
        title: text,
        showConfirmButton: false,
        timer: 2000
      })
}
  return (
    <>
      <Judul
        title="Peminjaman dan Pembayaran"
        info="Silahkan melengkapi form dibawah untuk menyewa peralatan kamera!"
      />
      <Card className="container-fluid text-center" style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Form Peminjaman Barang</Card.Title>
          <form
            className="container user"
            style={{ width: "85%" }}
            onSubmit={meminjam}
          >
            <div className="form-group">
              <label htmlFor="name" className="float-start mb-0 ml-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control form-control-user"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Nama"
                defaultValue={user.nama_lengkap}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="alamat" className="float-start mb-0 ml-1">
                Alamat
              </label>
              <input
                type="text"
                className="form-control form-control-user"
                id="alamat"
                placeholder="Jl. Menuju Surga No.10"
                defaultValue={user.alamat}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="float-start mb-0 ml-1">
                No Telepon
              </label>
              <input
                type="number"
                className="form-control form-control-user"
                id="phone"
                placeholder="085xxxxxxxx"
                defaultValue={user.phone}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="float-start mb-0 ml-1">
                Email
              </label>
              <input
                type="email"
                className="form-control form-control-user"
                id="email"
                placeholder="emailku@mail.com"
                defaultValue={user.email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="durasi" className="float-start mb-0 ml-1">
                Lama Peminjaman
              </label>
              <select className="form-control" id="durasi">
                <option value="1">24 jam (1 hari)</option>
                <option value="2">48 jam (2 hari)</option>
                <option value="3">72 jam (3 hari)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="jaminan" className="float-start mb-0 ml-1">
                Barang Jaminan
              </label>
              <select className="form-control" id="jaminan">
                <option value="e-KTP">e-KTP</option>
                <option value="KTM / Kartu Pelajar">KTM / Kartu Pelajar</option>
                <option value="Passport">Passport</option>
                <option value="SIM">SIM</option>
                <option value="STNK">STNK</option>
                <option value="BPKB">BPKB</option>
                <option value="Kartu Keluarga">Kartu Keluarga</option>
                <option value="Akta">Akta</option>
                <option value="Ijazah">Ijazah</option>
              </select>
              <label className="float-start mb-0 ml text-muted labelText">
                * Barang jaminan harus dibawa ke outlet rental kamera!
              </label>
              <br />
              <label className="float-start mb-0 ml text-muted labelText">
                ** Periksa kembali barang barang pinjaman Anda di keranjang!
              </label>
            </div>
            <input
              className="btn btn-primary btn-user btn-block float-end mt-4"
              type="submit"
              style={{ width: "40%" }}
              value="Lanjut Pembayaran"
            />
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Peminjaman;
