import React, { Component } from "react";
import Image from "react-bootstrap/Image";
const locationKey = process.env.REACT_APP_LOCATIONIQ_KEY;
export default class Map extends Component {
  //This component is the image for the map and gets props for the lat,lon,and city name from the main.js component

  render() {
    return (
      <>
        <Image
          alt="map"
          src={`https://maps.locationiq.com/v3/staticmap?key=${locationKey}&center=${this.props.cityLat},${this.props.cityLon}&zoom=9&size=500x500&format=png`}
          title={this.props.cityName}
        ></Image>
      </>
    );
  }
}
