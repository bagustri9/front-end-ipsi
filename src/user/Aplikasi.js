import React from "react";
import axios from "axios";
import CardData from "../barang/CardData";
import Lokasi from "../tentang/lokasi";
import Faq from "../tentang/faq";
import Judul from "../menubar/judul";
import Nav from "../menubar/Nav";
import SideNav from "../menubar/SideNav";
import History from "../transaksi/History";
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListBarang from "../barang/ListBarang";
import Login from "./Login";
import CartAction from "../components/CartAction";
import Auth from "../components/Auth"
axios.defaults.withCredentials = true;

const Aplikasi = () => {
  return (
    <Router>
      <Switch>
        {window.location.pathname !== "/login" ? (
          <div id="page-top">
            <div id="wrapper">
              <SideNav />
              <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                  <Nav />
                  <div className="container-fluid">
                    <Route exact path="/">
                      <h1>Hello</h1>
                      <CartAction />
                    </Route>
                    <Route exact path="/dashboard"></Route>
                    <Route exact path="/daftar-barang">
                      <Judul
                        title="Data Barang Rental"
                        info="Pilih barang sesuai dengan kebutuhanmu!"
                      />
                      <CardData />
                    </Route>
                    <Route exact path="/history">
                    <Auth/>
                      <Judul
                        title="Riwayat Peminjaman Barang"
                        info="Temukan informasi riwayat peminjamanmu!"
                      />
                      <History />
                    </Route>
                    <Route exact path="/barang">
                      <Judul title="List Barang" info="Manajemen barang" />
                      <ListBarang />
                    </Route>
                    <Route exact path="/lokasi">
                      <Judul
                        title="Lokasi Rental"
                        info="Temukan lokasi rental kami!"
                      />
                      <Lokasi />
                    </Route>
                    <Route exact path="/faq">
                      <Judul
                        title="Frequently Asked Questions"
                        info="Cari tahu apa yang ingin kamu tanyakan!"
                      />
                      <Faq />
                    </Route>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : ("")}
        <Route exact path="/login">
            <Login />
          </Route>
      </Switch>
    </Router>
  );
};

export default Aplikasi;