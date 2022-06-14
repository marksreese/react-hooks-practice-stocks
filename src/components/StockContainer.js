import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockClick }) {

  const handleClick = () => {

  }

  const allStocks = stocks.map(stock => {
    return <Stock
      key={stock.id}
      stock={stock}
      onStockClick={onStockClick}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {allStocks}
    </div>
  );
}

export default StockContainer;
