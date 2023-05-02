import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart } from "./ContextReducer";

export default function Card(props) {
  let options = props.options;
  let priceOption = Object.keys(options);
  let dispatch = useDispatchCart();
  const priceRef = useRef();

  const [qty, setqty] = useState(1)
  const [size, setSize] = useState("")
  let finalPrice = qty * parseInt(options[size]);
  const handleAddToCard = async () =>{
    await dispatch({type: "ADD", id:props.foodItem._id, name : props.foodItem.name, img : props.foodItem.img, price: finalPrice, qty: qty, size: size});
  }

  useEffect(() => {
    setSize(priceRef.current.value)
  },[])
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img
            src={props.foodItem.img}
            style={{ width: "100%", height: "225px" }}
            className="card-img-top"
            alt="Food"
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">{props.foodItem.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <select className="btn btn-sm btn-outline-secondary rounded mr-2" onChange={(e) => setqty(e.target.value)}>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option value={i + 1} key={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
                <select className="btn btn-sm btn-outline-secondary rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                  {priceOption.map((data) => {
                    return (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    );
                  })}
                </select>
              </div>
              <p className="text-bold center">Price : ₹{finalPrice} </p>
            </div>
            <div className="d-flex justify-content-between btn-group w-100 mt-2">
              <button className="btn btn-sm btn-secondary rounded w-100" onClick={handleAddToCard}>
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
