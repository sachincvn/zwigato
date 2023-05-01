import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {BASE_URL} from '../common/Helper';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    userAddress: "",
    userCity: "",
    userZip: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${BASE_URL}/api/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        password: credentials.userPassword,
        email: credentials.userEmail,
        location: credentials.userAddress,
        city: credentials.userCity,
        postalCode: credentials.userZip,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
        alert("Enter valid credentials")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />

      <form className="jumbotron" onSubmit={handelSubmit}>
        <div className="container">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={credentials.firstName}
                placeholder="First name"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={credentials.lastName}
                onChange={onChange}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="userEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                placeholder="Email"
                name="userEmail"
                value={credentials.userEmail}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="userPassword">Password</label>
              <input
                type="password"
                className="form-control"
                name="userPassword"
                value={credentials.userPassword}
                id="userPassword"
                placeholder="Password"
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="userAddress"
              name="userAddress"
              value={credentials.userAddress}
              onChange={onChange}
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="userCity">City</label>
              <input
                type="text"
                className="form-control"
                id="userCity"
                name="userCity"
                onChange={onChange}
                value={credentials.userCity}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="userZip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="userZip"
                name="userZip"
                onChange={onChange}
                value={credentials.userZip}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>

      <Footer />
    </>
  );
}
