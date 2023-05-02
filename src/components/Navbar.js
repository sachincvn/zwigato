import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navgate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("authToken");
    navgate('/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Zwigato
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {localStorage.getItem("authToken") ? (
              <li className="nav-item active">
                <Link className="nav-link" to="/my-cart">
                  My Cart <span class="badge badge-light">4</span> <span className="sr-only">(current)</span>
                </Link>
              </li>
            ) : (
              ""
            )}
            <li className="nav-item active">
              <Link className="nav-link" to="/about-us">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact-us">
                Contact us <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>

          {localStorage.getItem("authToken") ? (
            <div className="my-2 my-lg-0">
              <Link
                to="/myorders"
                className="btn btn-secondary my-2 my-sm-0 mr-3"
              >
                My Orders
              </Link>

              <button
                style={{ color: "#FFF" }}
                className="btn btn-outline-secondary my-2 my-sm-0 mr-3"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="my-2 my-lg-0">
              <Link
                to="/login"
                style={{ color: "#FFF" }}
                className="btn btn-outline-secondary my-2 my-sm-0 mr-3"
              >
                Login
              </Link>
              <Link to="/sign-up" className="btn btn-secondary my-2 my-sm-0">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
