import React from "react";
import "./Weather.css";
import WeatherMarcup from "./WeatherMarcup";
import {getWeatherInfo, } from "../api/api";
import { options } from "../api/api";

class Weather extends React.Component {
    
    state = {
        curTemp: "",
        wind: "",
        feel: "",
        humidity: "",
        date: new Date(),
        place: ""
    };

    setTime = () => {
        this.setState({
          date: new Date(),
        });
    };

    setWeatherInfo = (res) => {
        const {degrees} = this.props
        if(degrees === "Farengeit") {
            this.setState({
                curTemp: (res.data[0].temp * 9 / 5) + 32,
                wind: res.data[0].wind_spd,
                feel: (res.data[0].app_max_temp * 9 / 5) + 32,
                humidity: res.data[0].rh,
                place: res.city_name,
            });
        }else if(degrees === "Celsium") {
            this.setState({
                curTemp: res.data[0].temp,
                wind: res.data[0].wind_spd,
                feel: res.data[0].app_max_temp,
                humidity: res.data[0].rh,
                // place: res.city_name,
            });
        }   
    };
    
    componentDidMount() {
        const {city} = this.props
        getWeatherInfo(city).then((res) => {
              this.setWeatherInfo(res);
            }
        );
        this.timerID = setInterval(() => this.setTime(), 1000);
    };

    componentDidUpdate(prevProps, prevState) {
        const {city} = this.props
        console.log(prevState.curTemp)

        if (prevState.curTemp !== this.state.curTemp) {
            getWeatherInfo(city).then((res) => {
                this.setWeatherInfo(res);
              }
            );
        }
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    render() {
        const {
            lang, 
            colour, 
            city,
        } = this.props
        const {
            curTemp, 
            feel, 
            wind, 
            humidity,
            date,
        } = this.state

        return (
            <div className={colour == "white" ? "data-white" : "data-black"}>
                <WeatherMarcup 
                    city={city}
                    lang = {lang}
                    curTemp = {curTemp}
                    feel = {feel}
                    wind = {wind}
                    humidity = {humidity}
                    colour={colour}
                    data={date.toLocaleString(`${lang}`, options)}
                />
            </div>
        )
    }
}

export default Weather