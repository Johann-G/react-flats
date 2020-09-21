import React, { Component } from "react";

import flats from "../../flats.js";
import FlatList from "./flat_list.jsx";

class App extends Component {

  render() {
    return (
      <div>
        <div className="map-container">
        </div>
        <div className="flat-list">
          <FlatList />
        </div>
      </div>
    );
  }
}

export default App;
