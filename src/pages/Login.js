import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BASE_URL } from "../common/Helper";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [loading, setloading] = useState(false);

  let navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: credentials.userPassword,
          email: credentials.userEmail,
        }),
      });

      const json = await response.json();
      console.log(json);
      if (!json.success) {
        setloading(false);
        alert("Invalid credentials");
      }

      if (json.success) {
        setloading(false);
        localStorage.setItem("authToken", json.authToken);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="jumbotron">
        <form className="container" onSubmit={handelSubmit}>
          <div class="form-group">
            <label htmlFor="userEmail">Email address</label>
            <input
              type="email"
              class="form-control"
              id="userEmail"
              name="userEmail"
              value={credentials.userEmail}
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              class="form-control"
              id="userPassword"
              name="userPassword"
              value={credentials.userPassword}
              onChange={onChange}
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            {loading ? (
              <>
                <span
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Logging in...
              </>
            ) : (
              <>Login</>
            )}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};
