import React from "react";

class WeatherMarcup extends React.Component {
    render() {
        const {
            lang,
            curTemp, 
            feel, 
            wind, 
            humidity,
            data,
            colour,
            city,
        } = this.props
        if(lang === "en") {
            return(
              <div className={colour == "white" ? "data-white" : "data-black"}>
                    <div className="city">{city}</div>
                    <div>{data}</div>
                    <div className="current-temp">{curTemp}</div>
                    <div className="feel-like">Feel like: {feel}</div>
                    <div className="wind">Wind speed: {wind} м/с</div>
                    <div className="humidity">Humidity: {humidity}%</div>
                </div>  
            )
        }if(lang === "ru") {
            return (
                <div className={colour == "white" ? "data-white" : "data-black"}>
                    <div>{data}</div>
                    <div className="current-temp">{curTemp}</div>
                    <div className="feel-like">Чувствуется как: {feel}</div>
                    <div className="wind">Скорость ветра: {wind} м/с</div>
                    <div className="humidity">Влажность: {humidity}%</div>
                </div>
            )
        }else {
            return(
               <div className={colour == "white" ? "data-white" : "data-black"}>
                    <div>{data}</div>
                    <div className="current-temp">{curTemp}</div>
                    <div className="feel-like">Адчуваецца як: {feel}</div>
                    <div className="wind">Хуткасць ветру: {wind} м/с</div>
                    <div className="humidity">Вильготнасць: {humidity}%</div>
                </div> 
            )
        }
    }
}

export default WeatherMarcup