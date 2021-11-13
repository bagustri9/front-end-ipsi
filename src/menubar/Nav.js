import { BsFillCartFill, BsFillPersonFill, BsReverseLayoutSidebarInsetReverse } from "react-icons/bs"
import Profile from "../assets/img/tes.png"
import { NavLink, Link, useNavigate } from "react-router-dom"
import api from '../api'
import BarangKeranjang from "./BarangKeranjang"
import {useContext} from "react"
import { BarangContext } from "../barang/BarangContext"

const Nav = () => {
  const {keranjang, setKeranjang} = useContext(BarangContext)

  let isLogin = localStorage.getItem("token") === null ? false : true
  let navigate = useNavigate()
  const logout = () =>{
    let config = {
      headers : {
        'Authorization' : 'Bearer '+localStorage.getItem("token")
      }
    }
    api.post('api/logout',"",config).then((res) =>{
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      navigate('/')
    })
  }
  console.log(keranjang)
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
        {/* Nav Item - Messages */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <BsFillCartFill /> {/* Counter - Messages */}
            <span className="badge badge-danger badge-counter">{keranjang.length}</span>
          </a>
          {/* Dropdown - Messages */}
          <div
            className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="messagesDropdown"
          >
            <h6 className="dropdown-header">Keranjang Barang</h6>
              {/* <div className="dropdown-list-image mr-3">
                <img
                className="rounded-circle"
                src="img/undraw_profile_1.svg"
                alt="..."
                />
              </div> */}
              <BarangKeranjang nama="NGEN" kuantitas="1"/>
              {keranjang ? (keranjang.map((cart, idx) => {
                <BarangKeranjang nama={cart.nama_barang} kuantitas={cart.kuantitas} key={idx}/>
              })) : <h1>Meongg</h1>
              }
            <NavLink
              className="dropdown-item text-center big bg-gradient-blue-100"
              to="/peminjaman"
            >
              Siap Rental Barang?
            </NavLink>
          </div>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>
        {isLogin ? (
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                User
              </span>
              <img
                className="img-profile rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover"
                }}
                src={Profile}
              />
            </a>
            {/* Dropdown - User Information */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <NavLink className="dropdown-item" to="/profile">
                <BsFillPersonFill className="mr-2"/>
                 Profil
              </NavLink>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#ProfileutModal"
              >
                <BsReverseLayoutSidebarInsetReverse className="mr-2"/>
                Logout
              </a>
            </div>
          </li>
        ) : (
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Login
              </span>
              <img
                className="img-profile rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                }}
                src={Profile}
              />
            </a>
            {/* Dropdown - User Information */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <Link className="dropdown-item" to="/login">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Login
              </Link>
            </div>
          </li>
        )}
        {/* Nav Item - User Information */}
      </ul>

      <div
        className="modal fade"
        id="ProfileutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Profileut" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <div data-dismiss="modal" className="btn btn-primary" onClick={() => logout()}>
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
