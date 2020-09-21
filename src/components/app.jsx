import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

import flats from "../../flats.js";
import FlatList from "./flat_list.jsx";
import Marker from "./marker.jsx";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     selectedFlatName= null;
  //   }
  // }

  // selectFlat = (name) => {
  //   this.setState({
  //     selectedFlatName: name
  //   });
  // }

  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 11
  };

    

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker lat={48.884211} lng={2.34689} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
