import {NavLink} from 'react-router-dom'
import Logo from '../assets/img/logo.png'
import {BsFillCameraFill, BsFillBagCheckFill, BsPeopleFill, BsFillFolderFill, BsFolderFill} from "react-icons/bs";

const SideNav = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <NavLink
        exact
        className="sidebar-brand d-flex align-items-center justify-content-center my-3"
        to="/daftar-barang"
      >
        <img
          src={Logo}
          style={{
            width: "150px",
            objectFit: "cover",
          }}
        />
      </NavLink>

      {/* <li className="nav-item active">
        <a className="nav-link" 
          href="index.html">
          <BsFillFolderFill className="mr-2"/>
          <span>Dashboard</span>
        </a>
      </li> */}

      <div className="sidebar-heading">
        Member
        <hr className="mt-1 mb-1"/>
      </div>
      <li className="nav-item">
        <a
          className="nav-link collapsed mt-0"
          data-toggle="collapse"
          href="#"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo">
          <BsFillCameraFill className="mr-2"/>
          <span>Barang Rental</span>
        </a>

        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink activeClassName="active" className="collapse-item" to="/daftar-barang">
              Data Barang Rental
            </NavLink>
            <NavLink activeClassName="active" className="collapse-item" to="/jadwal">
              Jadwal Peminjaman
            </NavLink>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-toggle="collapse"
          href="#"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities">
          <BsFillBagCheckFill className="mr-2"/>
          <span>Transaksi Rental</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink activeClassName="active" className="collapse-item" to="peminjaman">
              Peminjaman/Pembayaran
            </NavLink>
            <NavLink activeClassName="active" className="collapse-item" to="/history">
              Riwayat Peminjaman
            </NavLink>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-toggle="collapse"
          href="#"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages">
          <BsPeopleFill className="mr-2"/>
          <span>Tentang</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
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

      <div className="sidebar-heading mt-3">
        Admin
        <hr className="mt-1 mb-1"/>
      </div>
      <li className="nav-item">
        <a
          className="nav-link collapsed mt-0"
          data-toggle="collapse"
          href="#"
          data-target="#collapseFive"
          aria-expanded="true"
          aria-controls="collapseFive">
          <BsFillFolderFill className="mr-2"/>
          <span>Menu Admin</span>
        </a>

        <div
          id="collapseFive"
          className="collapse"
          aria-labelledby="headingFive"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink activeClassName="active" className="collapse-item" to="/barang">
              Kelola Barang
            </NavLink>
            <NavLink activeClassName="active" className="collapse-item" to="/peminjamans">
              Kelola Peminjaman
            </NavLink>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SideNav;
