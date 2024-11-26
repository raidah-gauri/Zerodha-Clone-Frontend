import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{
          height: "66px",
          width: "100%",
          boxShadow: "2px 1px 2px #eee",
          backgroundColor: "#fff",
          position: "fixed",
        }}
      >
        <div className="container d-flex justify-content-between align-items-center ">
          <div className="img p-5 m-5">
            <Link to="/" >
              <img
                src="media/images/logo.svg"
                alt="Logo"
                style={{ width: "120px" }}
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  to="/signup"
                  className="nav-link active pl-5"
                  aria-current="page"
                >
                  Signup{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active pl-5"
                  aria-current="page"
                >
                  About{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-link active"
                  aria-current="page"
                >
                  Products{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/pricing"
                  className="nav-link active"
                  aria-current="page"
                >
                  Pricing{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/support"
                  className="nav-link active"
                  aria-current="page"
                >
                  Support{" "}
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="col pt-5"></div>
    </>
  );
}

export default Navbar;
