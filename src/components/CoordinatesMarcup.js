import React from "react";

class CoordinatesDaughter extends React.Component {
    render() {
        const {
          lang,
          latitude,
          longitude,
          } = this.props
        if (lang === "en") {
            return (
              <div className="coordinates">
                <div className="coordinates-point">
                  Latitude: {Math.floor(latitude)}
                </div>
                <div className="coordinates-point">
                  Longitude: {Math.floor(longitude)}
                </div>
              </div>
            );
          }
          if (lang === "ru") {
            return (
              <div className="coordinates">
                <div className="coordinates-point">
                  Широта: {Math.floor(latitude)}
                </div>
                <div className="coordinates-point">
                  Долгота: {Math.floor(longitude)}
                </div>
              </div>
            );
          } else {
            return (
              <div className="coordinates">
                <div className="coordinates-point">
                  Вышыня: {Math.floor(latitude)}
                </div>
                <div className="coordinates-point">
                  Даугата: {Math.floor(longitude)}
                </div>
              </div>
            );
          }
    }
}

export default CoordinatesDaughter