import React from "react";
import "./link.css";

const LinkBox = meta => {
  const {meta : data} = meta;
  // console.log(data)
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

const ErrorBox = () => {
  return (
    <div className="linkPreviewOutter center verticalAlignBase errorBlock ">
      <i className="cross fas fa-times" />
      <strong>Some Error Occured in fetching the data !!</strong>
    </div>
  );
};

export default props => {
  const { meta: data, error } = props;
  console.log(props);
  if (error) {
    return <ErrorBox />;
  } else {
    return <LinkBox meta={data} />;
  }
};
