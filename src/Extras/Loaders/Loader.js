import React from "react";
import "./loader.css";
export default () => {
  return (
    <div className="loaderOutter">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
