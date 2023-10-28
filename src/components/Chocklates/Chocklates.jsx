import { useState } from "react";
import chocolates from "../../data";
import { useEffect } from "react";
import Chocklate from "../Chocklate/Chocklate";
import "./Chocklates.css";
export default function Chocklates() {
  return (
    <div className="chocklates">
      {chocolates.map((e) => (
        <Chocklate key={e.name} chocklate={e} />
      ))}
    </div>
  );
}
