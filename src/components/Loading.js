import React from "react";
import carga from "../images/gif/loading-arrow.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>Cargando cuartos...</h4>
      <img src={carga} alt="" />
    </div>
  );
}
