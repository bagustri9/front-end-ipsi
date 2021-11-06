import {NavLink} from 'react-router-dom' 
import Logo from '../assets/img/logo.png'

const SideNav = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
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
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
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
          <i className="fas fa-fw fa-cog"></i>
          <span>Barang Rental</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="buttons.html">Data Barang Rental</a>
            <a className="collapse-item" href="cards.html">Jadwal Peminjaman</a>
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
          <i className="fas fa-fw fa-wrench"></i>
          <span>Transaksi Rental</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="utilities-color.html">Peminjaman Barang</a>
            <a className="collapse-item" href="utilities-border.html">Pembayaran Barang</a>
            <a className="collapse-item" href="utilities-animation.html">Pengembalian Barang</a>
            <a className="collapse-item" href="utilities-other.html">Riwayat Peminjaman</a>
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
          <i className="fas fa-fw fa-folder"></i>
          <span>Tentang</span>
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
            <NavLink activeClassName="active" className="collapse-item" to="/kontak">
                Informasi Kontak
            </NavLink>
          </div>
        </div>
      </li>

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
  )
}

export default SideNav