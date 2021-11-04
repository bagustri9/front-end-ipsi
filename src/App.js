import React from 'react';
import axios from 'axios';
import CardData from './barang/dataBarang';
import Lokasi from './tentang/lokasi';
import Faq from './tentang/faq';
import Judul from './menubar/judul';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListBarang from "./barang/ListBarang";
import Register from "./user/Register";
axios.defaults.withCredentials = true;
function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/">
              <h1>Hello</h1>
            </Route>
            <Route exact path="/daftarBarang">
              <CardData />
            </Route>
            <Route exact path="/barang">
              <ListBarang />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/lokasi">
              <Judul title="Lokasi Rental" info="Temukan lokasi rental terdekat!" />
              <Lokasi />
            </Route>
            <Route exact path="/faq">
              <Judul title="Frequently Asked Questions" info="Cari tahu apa yang ingin kamu tanyakan!" />
              <Faq />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;