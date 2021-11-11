import "../App.css";
import Nav from "../menubar/Nav";
import SideNav from "../menubar/SideNav";
import { Outlet, useLocation } from "react-router-dom";
import Auth from "../components/Auth";

const Aplikasi = () => {
  const needAuth = ["/history"];
  const adminRole = ["/barang"];
  let location = useLocation();
  const isAuth = () => {
    return localStorage.getItem("token") !== null ? true : false;
  };

  const isAdmin = ()=>{
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.role)
    if(user){
      return user.role === 'Admin';
    }
    return false;
  }

  return (
<<<<<<< HEAD
    <Router>
      <Switch>
        {window.location.pathname === "/login" ? (
          <Route exact path="/login">
              <Login />
          </Route>
        ) : window.location.pathname === "/register" ? (
          <Route exact path="/register">
            <Regis/>
          </Route>
        ) : window.location.pathname === "/forgot" ? (
          <Route exact path="/forgot">
            <Forgot/>
          </Route>
        ) : (
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
=======
    <>
      {needAuth.map((auth) =>
        auth == location.pathname && !isAuth() ? (
          <Auth type='auth'/>
        ) : (
          adminRole.map((role) =>
            role == location.pathname && !isAdmin() ? (
              <Auth type='role'/>
            ) : (
              <div id="page-top">
                <div id="wrapper">
                  <SideNav />
                  <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                      <Nav />
                      <div className="container-fluid">
                        <Outlet />
                      </div>
>>>>>>> 7244f0d691fcc2b68a04f08c62a7d065bb24f295
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        )
      )}
    </>
  );
};

export default Aplikasi;
