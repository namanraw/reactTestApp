import React from "react";
import "./link.css";

export default meta => {
  const { meta: data } = meta;
  return (
    <a href={data.url} target="_blank">
      <div className="linkPreviewOutter">
        <div className="imageDiv ">
          <img src={data.image} className="img-responsive linkImage" />
        </div>
        <div className="descriptionDiv ">
          <div className="titleDiv">
            <h3>{data.title}</h3>
          </div>
          <div className="decDiv">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
