import React from 'react';
import axios from 'axios';
import CardData from './barang/dataBarang';
import Lokasi from './tentang/lokasi';
import Faq from './tentang/faq';
import Judul from './menubar/judul';
import SideNav from './menubar/SideNav';
import NavProfile from './menubar/NavProfile';
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListBarang from "./barang/ListBarang";
import Register from "./user/Register";
import Profile from './assets/img/tes.png'
import { BsFillCartFill } from "react-icons/bs";

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router >
      <div id="page-top">
        <div id="wrapper">
          <SideNav/>
          <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

              <nav
                className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* Sidebar Toggle (Topbar) */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3">
                  <i className="fa fa-bars"></i>
                </button>

                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">

                  {/* Nav Item - Search Dropdown (Visible Only XS) */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/* Dropdown - Messages */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown">
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"/>
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

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
                      <BsFillCartFill />
                      {/* Counter - Messages */}
                      <span className="badge badge-danger badge-counter">7</span>
                    </a>
                    {/* Dropdown - Messages */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="messagesDropdown">
                      <h6 className="dropdown-header">
                        Message Center
                      </h6>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                          <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..."/>
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                          <div className="small text-gray-500">Emily Fowler · 58m</div>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                          <img className="rounded-circle" src="img/undraw_profile_2.svg" alt="..."/>
                          <div className="status-indicator"></div>
                        </div>
                        <div>
                          <div className="text-truncate">I have the photos that you ordered last month,
                            how would you like them sent to you?</div>
                          <div className="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                          <img className="rounded-circle" src="img/undraw_profile_3.svg" alt="..."/>
                          <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                          <div className="text-truncate">Last month's report looks great, I am very happy
                            with the progress so far, keep up the good work!</div>
                          <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                        </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                            alt="..."/>
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div>
                          <div className="text-truncate">Am I a good boy? The reason I ask is because
                            someone told me that people say this to all dogs, even if they aren't good...</div>
                          <div className="small text-gray-500">Chicken the Dog · 2w</div>
                        </div>
                      </a>
                      <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
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

              </nav>

              <div className="container-fluid">
                <div>
                  <Switch>
                    <Route exact path="/">
                      <h1>Hello</h1>
                    </Route>
                    <Route exact path="/dashboard">
                      <NavProfile/>
                    </Route>
                    <Route exact path="/daftarBarang">
                      <CardData/>
                    </Route>
                    <Route exact path="/barang">
                      <ListBarang/>
                    </Route>
                    <Route exact path="/register">
                      <Register/>
                    </Route>
                    <Route exact path="/lokasi">
                      <Judul title="Lokasi Rental" info="Temukan lokasi rental terdekat!"/>
                      <Lokasi/>
                    </Route>
                    <Route exact path="/faq">
                      <Judul
                        title="Frequently Asked Questions"
                        info="Cari tahu apa yang ingin kamu tanyakan!"/>
                      <Faq/>
                    </Route>
                  </Switch>
                </div>
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright &copy; Your Website 2021</span>
                    </div>
                  </div>
                </footer>

              </div>

            </div>

            <a className="scroll-to-top rounded" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>

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
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App