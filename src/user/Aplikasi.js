import "../App.css";
import Nav from "../menubar/Nav";
import SideNav from "../menubar/SideNav";
import { Outlet, useLocation } from "react-router-dom";
import Auth from "../components/Auth";

const Aplikasi = () => {
  const needAuth = ["/history", "/profile"];
  const adminRole = ["/barang"];
  let location = useLocation();
  let count = 0;
  let role = 0;
  const isAuth = () => {
    return localStorage.getItem("token") !== null ? true : false;
  };

  const isAdmin = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return user.role === "Admin";
    }
    return false;
  };

  const setRole = (id) => {
    role = id;
  };

  const sumCount = () => {
    count++;
  };

  return (
    <>
      {needAuth.map((auth, idx) =>
        auth == location.pathname && !isAuth()
          ? setRole(0)
          : adminRole.map((role) =>
              role == location.pathname && !isAdmin() ? setRole(1) : sumCount()
            )
      )}
      {count === needAuth.length ? (
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
      ) : role === 1 ? (
        <Auth type="role" />
      ) : (
        <Auth type="auth" />
      )}
    </>
  );
};

export default Aplikasi;
