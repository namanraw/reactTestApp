import React, { Component } from "react";
import "./link.css";
import LinkPreview from "./LinkPreview";
import Loader from "../../Extras/Loaders/Loader";

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
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
        if (!metaData.meta)
          return this.setState({ error: true,showLinkPreview: true, showLoader: false });
        if (!metaData.meta.image)
          metaData.meta["image"] =
            "https://miro.medium.com/max/678/0*QKJemZKR6vA6hMAj.png";

        this.setState({
          metaData       : metaData.meta,
          showLinkPreview: true,
          showLoader     : false,
          error          : false
        });
      })
      .catch(err => console.log(err));
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
          !this.state.showLoader && (
            <LinkPreview error={this.state.error} meta={this.state.metaData} />
          )}
        {this.state.showLoader && <Loader />}
      </div>
    );
  }
}
