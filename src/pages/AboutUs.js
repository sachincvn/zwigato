import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="jumbotron text-center">
        <div className="container">

        <h1 className="jumbotron-heading">About us</h1>
          <p className="lead text-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero iure ea voluptatum dolor praesentium nesciunt tenetur quas odio corrupti sed, rem temporibus numquam doloribus rerum similique esse error quo. Id harum nemo asperiores praesentium nihil ea, corrupti blanditiis nobis.          </p>
         
          <p className="lead text-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste ipsam animi molestiae accusamus debitis dolores nisi similique nihil earum, aliquam reiciendis provident rerum doloribus. Ipsa quia esse amet veniam sed aliquam facilis? Veritatis quaerat voluptate itaque voluptatem suscipit quod adipisci officiis blanditiis nulla doloremque. Accusantium itaque et quia possimus.</p>
          <p>
            <Link to="/" className="btn btn-primary my-2 mr-2">Home</Link>
            <Link to="/contact-us" className="btn btn-secondary my-2">Contact</Link>
          </p>

        </div>
      </section>
      <Footer />
    </>
  );
};
