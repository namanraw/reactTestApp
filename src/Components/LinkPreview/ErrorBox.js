import React from 'react'
import "./link.css";

export default () => {
  return (
    <div className="linkPreviewOutter center verticalAlignBase errorBlock ">
      <i className="cross fas fa-times" />
      <strong>Some Error Occured in fetching the data !!</strong>
    </div>
  )
}
