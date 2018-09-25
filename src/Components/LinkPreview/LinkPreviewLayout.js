import React, { Component } from "react";
import "./link.css";
import Loader from "../../Extras/Loaders/Loader";
import ErrorBox from "./ErrorBox";
import LinkBox from "./LinkBox";

const BASE_URL = "https://api.urlmeta.org/?url=";

export default class LinkPreviewLayout extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      metaData: {},
      showLinkPreview: false,
      showLoader: false,
      error: false
    };
  }

  setDefaultStates = (
    showLinkPreview = false,
    error = false,
    metaData = {},
    showLoader = false
  ) => {
    this.setState({
      showLinkPreview: showLinkPreview,
      error: error,
      metaData: metaData,
      showLoader: showLoader
    });
  };

  handleInputChange = e => {
    let val = e.target.value;
    let name = e.target.name;

    this.setState({ [name]: val });

    if (val.length === 0) this.setDefaultStates();
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ showLoader: true });

    let url             = this.state.url;
    let requestUrl      = `${BASE_URL}${url}`;
    let metaDataRequest = fetch(requestUrl);

    metaDataRequest
      .then(d => d.json())
      .then(metaData => {
        if (!metaData.meta) return this.setDefaultStates(true, true);
        if (!metaData.meta.image)
          metaData.meta["image"] =
            "https://miro.medium.com/max/678/0*QKJemZKR6vA6hMAj.png";

        this.setDefaultStates(true, false, metaData.meta, false);
      })
      .catch(err => this.setDefaultStates(true, true));
  };
  render() {
    return (
      <div className="outterDiv">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="inputSearch">
            <input
              autoComplete="off"
              value={this.state.url}
              onChange={e => this.handleInputChange(e)}
              type="url"
              name="url"
              placeholder="Enter the URL"
            />
            <button className="submitButton" type="submit">
              <i className="fas fa-angle-right" />
            </button>
          </div>
        </form>
        {this.state.showLinkPreview &&
          !this.state.showLoader &&
          (this.state.error ? (
            <ErrorBox />
          ) : (
            <LinkBox meta={this.state.metaData} />
          ))}
        {this.state.showLoader && <Loader />}
      </div>
    );
  }
}
