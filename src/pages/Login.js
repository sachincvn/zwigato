import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Login = () => {

  return (
    <>
      <Navbar />
      <div  className="jumbotron">
        <form className="container">
          <div class="form-group">
            <label htmlFor="userEmail">Email address</label>
            <input
              type="email"
              class="form-control"
              id="userEmail"
              name="userEmail"
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
              placeholder="Password"
            />
          </div>
        
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <Footer/>
    </>
  );
};
