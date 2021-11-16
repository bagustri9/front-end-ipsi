import {useLocation} from "react-router";
import axios from "axios";
import ListBarang from "./barang/ListBarang";
import CardData from "./barang/CardData";
import Lokasi from "./tentang/lokasi";
import Faq from "./tentang/faq";
import History from "./transaksi/History";
import Peminjaman from "./transaksi/Peminjaman";
import Calendar from "./components/Calendar";
import EditProfile from "./user/EditProfile";
import Aplikasi from "./user/Aplikasi";
import Login from "./user/Login";
import Regis from "./user/Regis";
import Forgot from "./user/Forgot";
import Profile from "./user/Profile";
import { BarangProvider } from "./barang/BarangContext"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <BarangProvider>
      <Router>
        <Routes>
          <Route path="/" element={< Aplikasi />}>
            <Route path="/history" element={< History />}/>
            <Route path="/jadwal" element={< Calendar />}/>
            <Route path="/peminjaman" element={< Peminjaman />}/>
            <Route path="/barang" element={< ListBarang />}/>
            <Route path="/profile" element={<EditProfile />} />
            <Route path="/daftar-barang" element={< CardData />}/>
            <Route path="/lokasi" element={< Lokasi />}/>
            <Route path="/faq" element={< Faq />}/>
          </Route>
          <Route path="/login" element={< Login />}/>
          <Route path="/register" element={< Regis />}/>
          <Route path="/forgot" element={< Forgot />}/>
        </Routes>
      </Router>
    </BarangProvider>
  );
};

export default App;
