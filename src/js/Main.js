import React, { Component } from "react";
import LocationForm from "./LocationForm";
import LocationInfo from "./LocationInfo";
import Map from "./Map.js";
import axios from "axios";
const locationKey = process.env.REACT_APP_LOCATIONIQ_KEY;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityLat: "",
      cityLon: "",
      locationObject: {},
      map: "",
      showMap: false,
    };
  }
  handleChange = (e) => {
    this.setState({ cityName: e.target.value });
    console.log(this.state.cityName);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.getLatLon();
    this.setState({ showMap: true });
    console.log("im in sumbit");
  };
  getLatLon = async () => {
    const url = `https://us1.locationiq.com/v1/search?key=${locationKey}&q=${this.state.cityName}&format=json`;
    try {
      const res = await axios.get(url);
      let cityObj = res.data[0];

      let cityLatitude = cityObj.lat;
      let cityLongitude = cityObj.lon;
      console.log(cityLatitude, cityLongitude);
      this.setState({ cityLat: cityLatitude, cityLon: cityLongitude });

      console.log(res.data[0]);
      this.setState({ locationObject: res.data[0], showMap: true });
    } catch (err) {
      console.log("err.message");
    }
  };

  render() {
    return (
      <>
        {/* This is the Location Form for the start of the application. I am lifting up state to main and it is controlling the state for all child components. */}

        <LocationForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          getLatLon={this.getLatLon}
          cityName={this.state.cityName}
          cityLat={this.state.cityLat}
          cityLon={this.state.cityLon}
        />

        {/* I am conditionally rendering the map for when I actually have the lat and lon from the api call */}
        {this.state.showMap === true ? (
          <Map
            cityName={this.state.cityName}
            cityLat={this.state.cityLat}
            cityLon={this.state.cityLon}
          />
        ) : null}
        {/* This is a small conditionally rendered component that just shows displays the name of the city, the latitude and longitude. */}
        {this.state.cityLat !== "" ? (
          <LocationInfo
            cityName={this.state.cityName}
            cityLat={this.state.cityLat}
            cityLon={this.state.cityLon}
          />
        ) : null}
      </>
    );
  }
}
