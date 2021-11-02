import React from 'react';
import axios from 'axios';
import Header from './components/Headers/Header';
import CardData from './barang/dataBarang';
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
          </Switch>
      </div>
    </Router>
  );
}

export default App;