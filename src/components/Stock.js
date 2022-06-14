import React from "react";

function Stock({ stock, onStockClick }) {
  function handleClick() {
    onStockClick(stock.name, stock.price);
  }
  return (
    <div>
      <div className="card" onClick = {console.log(e)}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
