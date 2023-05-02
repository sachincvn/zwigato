import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart  } from "../components/ContextReducer";

export const MyCart = () => {
  let data = useCart();
//   let dispatch = useDispatchCart();

//   let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <>
      <Navbar />

      <div className="jumbotron text-center">
        <div className="container">
          {data.length === 0 ? (
            <h1 className="jumbotron-heading">Cart is Empty</h1>
          ) : (
            <>
              <h1 className="jumbotron-heading">My Cart</h1>

              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Option</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((food, index) => {
                    return(
                        <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{food.name}</td>
                      <td>{food.qty}</td>
                      <td>{food.size}</td>
                      <td>{food.price}</td>
                    </tr>
                    )
                  })}
                </tbody>
              </table>

              <div className="float-right">
                <button type="button" class="btn btn-success">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
