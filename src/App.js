import React from 'react';
import axios from 'axios';
import CardData from './barang/dataBarang';
import Lokasi from './tentang/lokasi';
import Faq from './tentang/faq';
import Judul from './menubar/judul';
import Nav from './menubar/Nav';
import SideNav from './menubar/SideNav';
import History from './transaksi/History';
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListBarang from "./barang/ListBarang";
import Login from "./user/Login";
import Register from "./user/Register";
import CartAction from "./components/CartAction"

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router >
      <div id="page-top">
        <div id="wrapper">
          <SideNav/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Nav/>
              <div className="container-fluid">
                <div>
                  <Switch>
                    <Route exact path="/">
                      <h1>Hello</h1>
                      <CartAction/>
                    </Route>
                    <Route exact path="/dashboard">
                    </Route>
                    <Route exact path="/daftarBarang">
                      <Judul
                        title="Data Barang Rental"
                        info="Pilih barang sesuai dengan kebutuhanmu!"/>
                      <CardData/>
                    </Route>
                    <Route exact path="/history">
                      <Judul
                        title="Riwayat Peminjaman Barang"
                        info="Temukan informasi riwayat peminjamanmu!"/>
                      <History/>
                    </Route>
                    <Route exact path="/barang">
                      <ListBarang/>
                    </Route>
                    <Route exact path="/register">
                      <Register/>
                    </Route>
                    <Route exact path="/login">
                      <Login/>
                    </Route>
                    <Route exact path="/lokasi">
                      <Judul title="Lokasi Rental" info="Temukan lokasi rental kami!"/>
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