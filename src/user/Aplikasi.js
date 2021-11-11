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
