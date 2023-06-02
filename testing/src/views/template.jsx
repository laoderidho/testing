import React from 'react'

export default function template(data) {
  return (
    <>
      <div className="col-md-4" key={data.fruitId}>
        <div className="card m-3">
          <div className="card-body">
            <h2 className="card-title">{data.fruitName}</h2>
            <h5 className="card-subtitle mb-2 text-muted">{data.fruitType}</h5>
            <p className="card-text">Stock : {data.stock}</p>
          </div>
        </div>
      </div>
    </>
  );
}
