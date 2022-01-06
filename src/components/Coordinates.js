import React from "react";
import "./Coordinates.css"

class Coordinates extends React.Component {
    render() {
        const { Latitude, Longitude } = this.props;
        return(
            <div className="coordinates">
                <div className="coordinates-point">Latitude: {Math.floor(Latitude)}</div>
                <div className="coordinates-point">Longitude: {Math.floor(Longitude)}</div>
            </div>
        )
    }
}

export default Coordinates