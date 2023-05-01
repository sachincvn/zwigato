import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { BASE_URL } from "../common/Helper";

export default function Home() {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch(`${BASE_URL}/api/foodItems`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setFoodItems(response[0]);
      setFoodCategory(response[1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
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
            dolor sit amet consectetur adipisicing elit. Fugit maiores totam at.
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
          
          {foodCategory !== []
            ? foodCategory.map((data) => {
                return (
                  <>
                    <h1 key={data.id}>{data.CategoryName} </h1>
                    <hr />
                    <div className="row">
                      {foodItems !== [] ? (
                        <>
                          {foodItems
                            .filter(
                              (item) => item.CategoryName === data.CategoryName
                            )
                            .map((foodItem) => {
                              return (
                                  <Card foodName={foodItem.name} description={foodItem.description} options={foodItem.options[0]} imgSrc={foodItem.img} ></Card>
                              );
                            })}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                );
              })
            : ""}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
