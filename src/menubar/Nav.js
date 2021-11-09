import {BsFillCartFill} from "react-icons/bs";
import Profile from '../assets/img/tes.png'
import {NavLink} from 'react-router-dom'
import {Col, Container, Row} from "react-bootstrap";

import CartAction from "../components/CartAction"

function Nav() {
  return (
    <nav
      className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

      {/* Sidebar Toggle (Topbar) */}
      <button id="sidebarToggleTop" className="btn btn-link rounded-circle mr-3">
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
            aria-expanded="false">
            <BsFillCartFill/> {/* Counter - Messages */}
            <span className="badge badge-danger badge-counter">7</span>
          </a>
          {/* Dropdown - Messages */}
          <div
            className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="messagesDropdown">
            <h6 className="dropdown-header">
              Keranjang Barang
            </h6>
            <div className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..."/>
              </div>
              <div className="font-weight-bold">
                <div className="text-truncate">Sony A7S Mark II BO
                </div>
                <div className="small text-gray-500">Kuantitas : 1</div>
              </div>
              <CartAction/>
            </div>
            <NavLink
              className="dropdown-item text-center big bg-gradient-blue-100"
              to="/history">
              Siap Rental Barang?
            </NavLink>
          </div>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">User</span>
            <img
              className="img-profile rounded-circle"
              style={{
              width: "40px",
              height: "40px"
            }}
              src={Profile}/>
          </a>
          {/* Dropdown - User Information */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown">
            <a className="dropdown-item" href="#">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Activity Log
            </a>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#ProfileutModal">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Profileut
            </a>
          </div>
        </li>
      </ul>
      <div
        className="modal fade"
        id="ProfileutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Profileut" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a className="btn btn-primary" href="login.html">Profileut</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;