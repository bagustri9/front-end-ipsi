import { BsFillCartFill, BsFillPersonFill, BsPersonFill, BsReverseLayoutSidebarInsetReverse } from "react-icons/bs"
import Profile from "../assets/img/tes.png"
import { NavLink, Link, useNavigate } from "react-router-dom"
import api from '../api'
import BarangKeranjang from "./BarangKeranjang"
import {useContext} from "react"
import { BarangContext } from "../barang/BarangContext"
import {useState, useEffect} from "react"
import Cookies from 'js-cookie'

const Nav = () => {
  let [user, setUser] = useState({ image: null });
  const {keranjang, setKeranjang, fetch, setFetch} = useContext(BarangContext)
  let isLogin = localStorage.getItem("token") === null ? false : true
  let navigate = useNavigate()
  let config = {
    headers : {
      'Authorization' : 'Bearer '+localStorage.getItem("token")
    }
  }
  const logout = () =>{
    api.post('api/logout',"",config).then((res) =>{
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      Cookies.remove('cart')
      navigate('/')
    })
  }
  const getProfile = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let request = await api.get("api/user/" + user.id, config);
    setUser(request.data);
  };

  useEffect(() => {
    const checkCookie = () => {
      if(Cookies.get('cart') !== undefined) {
          setKeranjang(JSON.parse(Cookies.get('cart')))
      }
  }
  if(fetch) {
      checkCookie()
      setFetch(false)
  }

    if (isLogin) {
      getProfile();
    }
  }, []);
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
            <span className="badge badge-danger badge-counter">
              {keranjang.length}
            </span>
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
              {keranjang.length !== 0 ? (keranjang.map((cart, idx) => {
                return (
                  <BarangKeranjang nama={cart.nama_barang} kuantitas={cart.kuantitas} key={idx}/>
                )
              })) : ""
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
                {user.nama_lengkap}
              </span>
              {user.image ? (
                <img
                  className="img-profile rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                  src={user.gambar}
                />
              ) : (
                <BsPersonFill />
              )}
            </a>
            {/* Dropdown - User Information */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <NavLink className="dropdown-item" to="/profile">
                <BsFillPersonFill className="mr-2" />
                Profil
              </NavLink>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#ProfileutModal"
              >
                <BsReverseLayoutSidebarInsetReverse className="mr-2" />
                Logout
              </a>
            </div>
          </li>
        ) : (
          <li className="nav-item dropdown no-arrow">
            <Link className="nav-link dropdown-toggle" to="/login">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Login
              </span>
            </Link>
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
                Apa anda yakin ?
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
            <div className="modal-body">Tekan "Log out" jika ingin keluar</div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <div
                data-dismiss="modal"
                className="btn btn-primary"
                onClick={() => logout()}
              >
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
