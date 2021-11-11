import { useLocation } from "react-router";
import axios from "axios";
import ListBarang from "./barang/ListBarang";
import CardData from "./barang/CardData";
import Lokasi from "./tentang/lokasi";
import Faq from "./tentang/faq";
import History from "./transaksi/History";
import Aplikasi from "./user/Aplikasi";
import Login from "./user/Login";
import Regis from "./user/Regis";
import Forgot from "./user/Forgot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Aplikasi />}>
          <Route path="/history" element={<History />} />
          <Route path="/barang" element={<ListBarang />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/daftar-barang" element={<CardData />} />
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regis />} />
      </Routes>
    </Router>
  );
};

export default App;
