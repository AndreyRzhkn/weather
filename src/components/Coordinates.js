import React from "react";
import "./Coordinates.css";

class Coordinates extends React.Component {
  changeLatLong = () => {
    const { Latitude, Longitude, lang } = this.props;
    if (lang === "ru") {
      return (
        <div className="coordinates">
          <div className="coordinates-point">
            Ширина: {Math.floor(Latitude)}
          </div>
          <div className="coordinates-point">
            Высота: {Math.floor(Longitude)}
          </div>
        </div>
      );
    }
    if (lang === "en") {
      return (
        <div className="coordinates">
          <div className="coordinates-point">
            Ширина: {Math.floor(Latitude)}
          </div>
          <div className="coordinates-point">
            Высота: {Math.floor(Longitude)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="coordinates">
          <div className="coordinates-point">
            Вышыня: {Math.floor(Latitude)}
          </div>
          <div className="coordinates-point">
            Даугата: {Math.floor(Longitude)}
          </div>
        </div>
      );
    }
  };
  render() {
    const { Latitude, Longitude } = this.props;

    return (
      <div className="coordinates">
        {/* <div className="coordinates-point">
          Latitude: {Math.floor(Latitude)}
        </div>
        <div className="coordinates-point">
          Longitude: {Math.floor(Longitude)}
        </div> */}
        {this.changeLatLong()}
      </div>
    );
  }
}

export default Coordinates;
