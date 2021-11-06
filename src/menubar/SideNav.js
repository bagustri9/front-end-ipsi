import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const SideNav = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <NavLink
        exact
        className="sidebar-brand d-flex align-items-center justify-content-center my-3"
        to="/"
      >
        <img
          src={Logo}
          style={{
            width: "150px",
            objectFit: "cover",
          }}
        />
      </NavLink>

      <li className="nav-item mt-1">
        <NavLink className="nav-link" exact to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-toggle="collapse"
          href="#"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Barang Rental</span>
        </a>

        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink className="collapse-item" exact to="/daftarBarang">
              Data Barang Rental
            </NavLink>
            <NavLink className="collapse-item" exact to="/">
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
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Transaksi Rental</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink to="/" exact className="collapse-item">
              Peminjaman Barang
            </NavLink>
            <NavLink to="/" exact className="collapse-item">
              Pembayaran Barang
            </NavLink>
            <NavLink to="/" exact className="collapse-item">
              Pengembalian Barang
            </NavLink>
            <NavLink to="/" exact className="collapse-item">
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
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Tentang</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink
              exact
              activeClassName="active"
              className="collapse-item"
              to="/faq"
            >
              FAQ
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="collapse-item"
              to="/lokasi"
            >
              Lokasi Rental
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="collapse-item"
              to="/kontak"
            >
              Informasi Kontak
            </NavLink>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SideNav;
