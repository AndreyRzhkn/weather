import React from "react";
import "./Weather.css";

class Weather extends React.Component {
    render() {
        const { data, curTemp, feel, wind, humidity } = this.props 
        return (
            <div className="data">
                <div>{data}</div>
                <div className="current-temp">{curTemp}</div>
                <div className="feel-like">{feel}</div>
                <div className="wind">{wind} m/s</div>
                <div className="humidity">{humidity}%</div>
            </div>
        )
    }
}

export default Weather