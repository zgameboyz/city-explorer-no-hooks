import React, { Component } from "react";

export default class LocationInfo extends Component {
  render() {
    return (
      <>
        <h3>{this.props.cityName}</h3>
        <h5>
          Latitude: {this.props.cityLat} Longitude {this.props.cityLon}
        </h5>
      </>
    );
  }
}
