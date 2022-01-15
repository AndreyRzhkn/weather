import React from "react";
import "./Coordinates.css";
import { getCoordinatesInfo, } from "../api/api";
import CoordinatesDaughter from "./CoordinatesMarcup";
import Map from "./Map";

class Coordinates extends React.Component {
  state = {
    latitude: "",
    longitude: "",
  };

  setCoordinatesInfo = (res) => {
    this.setState({
      latitude: res.results[0].geometry.lat,
      longitude: res.results[0].geometry.lng,
    });
  };

  componentDidMount() {
    const {city} = this.props
    console.log(city)
    getCoordinatesInfo(city).then((res) => {
      this.setCoordinatesInfo(res);
    });
  };
  componentDidUpdate(prevProps, prevState) {
    const {city} = this.props
    if(prevProps.city !== city) {
      getCoordinatesInfo(city).then((res) => {
        this.setCoordinatesInfo(res);
      }); 
    }
  };

  render() {
    const {longitude, latitude, } = this.state
    const {lang, colour, } = this.props
    return (
      <div className={colour == "white" ? "coordinates-white" : "coordinates-black"}>
        <Map 
          longitude = {longitude}
          latitude = {latitude}
        />
        <div className={colour == "white" ? "coord-block-white" : "coord-block-black"}>
          <CoordinatesDaughter 
            longitude = {longitude}
            latitude = {latitude}
            lang = {lang}
          />
        </div>
        
      </div>
    );
  }
}

export default Coordinates;