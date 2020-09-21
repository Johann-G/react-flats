import React, { Component } from "react";

import flats from "../../flats.js";

class Flat extends Component {

  handleClick = () => {
      this.props.selectFlat(this.props.index);
  }

  render() {
    return(      
      <div className={`card ${this.props.selected ? " active" : ""}`} style={{backgroundImage: `url(${this.props.flat.imageUrl})`}} onClick={this.handleClick} >
        <div className="card-category">{this.props.flat.price} {this.props.flat.currency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
