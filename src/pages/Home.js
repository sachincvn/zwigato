import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { BASE_URL } from "../common/Helper";

export default function Home() {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setloading] = useState(false);
  const loadData = async () => {
    try {
      setloading(true);
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
    } finally {
      setloading(false);
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
            My MERN Stack Project 'Zwigato' for food Order, created using
            Mongoo, React, Express and Node JS. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Delectus maxime totam quod unde
            praesentium fuga modi enim amet nihil eius!
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

      {loading ? (
        <>
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

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
                                <Card
                                  foodItem={foodItem}
                                  options={foodItem.options[0]}
                                ></Card>
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
