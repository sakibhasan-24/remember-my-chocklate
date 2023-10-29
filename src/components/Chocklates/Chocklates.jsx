import { useState } from "react";
import chocolates from "../../data";
import { useEffect } from "react";
import Chocklate from "../Chocklate/Chocklate";
import "./Chocklates.css";
import { getValue, setValueInLocalStorage } from "../../storage";
export default function Chocklates() {
  const [price, setPrice] = useState(Number(getValue("total")));
  const handleCalculateTotalPrice = (chocklate) => {
    setPrice(Number((price + chocklate.price).toFixed(2)));
    setValueInLocalStorage(
      "total",
      Number((price + chocklate.price).toFixed(2))
    );
  };

  return (
    <div className="whole-container">
      <div className="chocklates">
        {chocolates.map((e) => (
          <Chocklate
            key={e.name}
            chocklate={e}
            handleCalculateTotalPrice={handleCalculateTotalPrice}
          />
        ))}
      </div>
      <aside>
        <p className="total-price"> Price: {price}</p>
      </aside>
    </div>
  );
}
