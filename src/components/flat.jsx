import React, { Component } from "react";

import flats from "../../flats.js";

const Background = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg"

class Flat extends Component {

  render() {
    return(
      // <div className="card">
      //   <img src={this.props.url} />
      //   {this.props.name}
      // </div>  
      
      <div className="card" style={{backgroundImage: `url(${this.props.url})`}}>
        <div className="card-category">{this.props.price} {this.props.currency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
