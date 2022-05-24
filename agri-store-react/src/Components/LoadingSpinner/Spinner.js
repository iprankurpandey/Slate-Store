import React from "react";
import "./Spinner.css";
function Spinner() {
  return (
    <div>
      <div className="data-loader">
        <h2> Data is being fetched : </h2>
        <hr />
        <div class="loader"></div>
      </div>
    </div>
  );
}

export default Spinner;
