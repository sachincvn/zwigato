import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Navbar />

        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Zwigato Order Now</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              consectetur, inventore dolorum incidunt excepturi asperiores
              praesentium repellat ex autem omnis tempore, voluptatibus officiis
              saepe similique modi maxime aliquam, suscipit optio. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Fugit maiores totam
              at.
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search here"
                aria-label="Search here"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary ml-2"
                type="button"
                id="button-addon2"
              >
                search
              </button>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
