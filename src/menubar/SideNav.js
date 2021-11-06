import {NavLink} from 'react-router-dom'
import Logo from '../assets/img/logo.png'
import {BsFillCameraFill, BsFillBagCheckFill, BsPeopleFill, BsFillFolderFill} from "react-icons/bs";

const SideNav = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar">

      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html">
        <img
          src={Logo}
          style={{
          width: "150px",
          objectFit: "cover"
        }}/>
      </a>

      <li className="nav-item active">
        <a className="nav-link" 
          href="index.html"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo">
          <BsFillFolderFill/>
          <span style={{marginLeft: "10px"}}>Dashboard</span>
        </a>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo">
          <BsFillCameraFill/>
          <span style={{marginLeft: "10px"}}>Barang Rental</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink activeClassName="active" className="collapse-item" to="/daftarBarang">
              Data Barang Rental
            </NavLink>
            <NavLink activeClassName="active" className="collapse-item" to="/faq">
              Jadwal Peminjaman
            </NavLink>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities">
          <BsFillBagCheckFill/>
          <span style={{marginLeft: "10px"}}>Transaksi Rental</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink activeClassName="active" className="collapse-item" to="/faq">
              Peminjaman Barang
            </NavLink>
            <NavLink activeClassName="active" className="collapse-item" to="/faq">
              Pembayaran Barang
            </NavLink>
            <NavLink activeClassName="active" className="collapse-item" to="/faq">
              Pengembalian Barang
            </NavLink>
            <NavLink activeClassName="active" className="collapse-item" to="/faq">
              Riwayat Peminjaman
            </NavLink>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages">
          <BsPeopleFill/>
          <span style={{marginLeft:"10px"}}>Tentang</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink activeClassName="active" className="collapse-item" to="/faq">
              FAQ
            </NavLink>
            <NavLink activeClassName="active" className="collapse-item" to="/lokasi">
              Lokasi Rental
            </NavLink>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default SideNav