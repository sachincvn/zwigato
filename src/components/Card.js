import React from "react";

export default function Card(props) {

  let options = props.options;
  let priceOption = Object.keys(options);

  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
        <img src={props.imgSrc} style={{"width":"100%","height" : "225px"}} className="card-img-top" alt="Food"/>
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <p className="card-text">
             {props.description}
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
                  {
                    priceOption.map((data) => {
                      return <option key={data} value={data}>{data}</option>
                    })
                  }
                </select>
              </div>
              <p className="text-bold">Price :$10 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
