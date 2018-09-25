import React, { Component } from 'react'
import "./list.css";

export default class List extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="outterdiv">
      <div className="sno">{this.props.sNo}.</div>
      <div className="title"> {this.props.title} </div>
      <div className="date"> {this.props.dateTime.toLocaleDateString()} </div>
      <div className="time"> {this.props.dateTime.toLocaleTimeString()} </div>
      <button onClick={()=>this.props.deleteEntry(this.props.sNo)} className="delete">x</button>
    </div>
    )
  }
}

