import Card from "react-bootstrap/Card"
import Pic from "../assets/img/tes.png"
import {BsCamera} from "react-icons/bs"

const Profile = () => {
    return(
        < >
            <Card className="container-fluid text-center" style={{width:"85%"}}>
                <Card.Img className="img-profile rounded-circle mx-auto d-block" variant="top" style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginTop: "1%",
                  marginBottom: "1%",
                }}src={Pic} />
                <Card.Title>Widii</Card.Title>
            </Card>
            <br/>

            <Card className="container-fluid text-center" style={{width:"85%"}}>
                <Card.Body >
                    <Card.Title >Perbarui Profil</Card.Title>
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
                      <label htmlFor="birth" className="float-start mb-0 ml-1">Tanggal Lahir</label>
                        <input
                          type="date"
                          className="form-control form-control-user"
                          id="birth"
                          placeholder="Tanggal Lahir"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="gender" className="float-start mb-0 ml-1">Jenis Kelamin</label>
                        <select class="form-control" id="gender">
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                        </select>
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
                      <label htmlFor="email" className="float-start mb-0 ml-1">Email</label>
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="email"
                          placeholder="emailku@mail.com"
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
                      <input
                        className="btn btn-primary btn-user btn-block float-end"
                        type="submit"
                        style={{width: "40%"}}
                        value="Simpan"
                      />
                    </form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Profile