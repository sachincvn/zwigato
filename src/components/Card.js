import React from "react";

export default function Card() {
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
        <img src="https://source.unsplash.com/random/?food,pizza,burger,snacks" style={{"width":"100%","height" : "225px"}} class="card-img-top" alt="Food"/>
          <div className="card-body">
            <h5 class="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <select className="btn btn-sm btn-outline-secondary rounded mr-2">
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option value={i + 1} key={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
                <select className="btn btn-sm btn-outline-secondary rounded">
                  <option value="half">Half</option>
                  <option value="full">Full</option>
                </select>
              </div>
              <large className="text-bold">Price :$10 </large>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
