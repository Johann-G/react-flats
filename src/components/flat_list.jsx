import React, { Component } from "react";

import flats from "../../flats.js";
import Flat from "./flat.jsx";

const Background = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg"

class FlatList extends Component {

  render() {
    return(
      <div className="flat-list">
        {flats.map(flat => {
          return <Flat key={flat.name} name={flat.name} url={flat.imageUrl} price={flat.price} currency={flat.priceCurrency}  />
        })}
      </div>      
    );
  }
}

export default FlatList;