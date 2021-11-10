import axios from "axios";
import CardData from "../barang/CardData";
import Lokasi from "../tentang/lokasi";
import Faq from "../tentang/faq";
import Nav from "../menubar/Nav";
import SideNav from "../menubar/SideNav";
import History from "../transaksi/History";
import "../App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import ListBarang from "../barang/ListBarang";
import Login from "./Login";
axios.defaults.withCredentials = true;

const Aplikasi = () => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          {location.pathname !== "/login" ? <SideNav /> : ""}
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              {location.pathname !== "/login" ? <Nav /> : ""}
              <div className="container-fluid">
                <Routes>
                  <Route path="/daftar-barang" element={<CardData />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/barang" element={<ListBarang />} />
                  <Route path="/lokasi" element={<Lokasi />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aplikasi;
