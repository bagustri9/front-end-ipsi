import React from 'react'
import CardData from './barang/dataBarang'
import Lokasi from './tentang/lokasi'
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ListBarang from "./barang/ListBarang"

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
            <Route exact path="/lokasi">
              <Lokasi />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;