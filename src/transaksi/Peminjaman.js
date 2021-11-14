import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Judul from "../menubar/judul"

const Peminjaman = () => {
    return(
        < >
        <Judul title="Peminjaman dan Pembayaran" info="Silahkan melengkapi form dibawah untuk menyewa peralatan kamera!"/>
            <Card className="container-fluid text-center" style={{width:"100%"}}>
                <Card.Body >
                    <Card.Title >Form Peminjaman Barang</Card.Title>
                    <form className="container user" style={{width: "85%"}}>
                      <div className="form-group" >
                        <label htmlFor="name" className="float-start mb-0 ml-1">Nama Lengkap</label>
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="name"
                          aria-describedby="emailHelp"
                          placeholder="Namaku Budi"
                          required
                        />
                      </div>
                      <div className="form-group">
                      <label htmlFor="address" className="float-start mb-0 ml-1">Alamat</label>
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="address"
                          placeholder="Jl. Menuju Surga No.10"
                          required
                        />
                      </div>
                      <div className="form-group">
                      <label htmlFor="phone" className="float-start mb-0 ml-1">No Telepon</label>
                        <input
                          type="number"
                          className="form-control form-control-user"
                          id="phone"
                          placeholder="085xxxxxxxx"
                          required
                        />
                      </div>
                    <div className="form-group">
                      <label htmlFor="email" className="float-start mb-0 ml-1">Email</label>
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="email"
                          placeholder="emailku@mail.com"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="durasi" className="float-start mb-0 ml-1">Lama Peminjaman</label>
                        <select class="form-control" id="durasi">
                            <option value="1">12 jam</option>
                            <option value="2">24 jam (1 hari)</option>
                            <option value="3">48 jam (2 hari)</option>
                            <option value="3">72 jam (3 hari)</option>
                        </select>
                    </div>
                      <div class="form-group">
                        <label htmlFor="jaminan" className="float-start mb-0 ml-1">Barang Jaminan</label>
                        <select class="form-control" id="jaminan">
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
                        <br/>
                        <label className="float-start mb-0 ml text-muted labelText">
                          ** Periksa kembali barang barang pinjaman Anda di keranjang!
                        </label>
                    </div>
                      <input
                        className="btn btn-primary btn-user btn-block float-end mt-4"
                        type="submit"
                        style={{width: "40%"}}
                        value="Lanjut Pembayaran"
                      />
                    </form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Peminjaman