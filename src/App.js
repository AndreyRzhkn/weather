import React from 'react';
import './App.css';
import ControlBlock from './components/ControlBlock';
import Coordinates from './components/Coordinates';
import Weather from './components/Weather';
import { getLinkToImage, getWeatherInfo, getGeolocationInfo, getCoordinatesInfo } from './API/API'





const maps = "pk.eyJ1IjoiYXJvemgiLCJhIjoiY2t5MWwzMncxMGNrZTJubGd0YnJlcjYzZSJ9.S9qiGdmXdAY0bdvE9xPoRA"


const options = {
  weekday: "short", 
  day: "numeric", 
  month: "long", 
  hour: "numeric", 
  minute: "numeric", 
  second: "numeric", 
  hour12: false,
}


class App extends React.Component {
  state = { 
    backgroundImg: "",

    date: new Date(),

    lang: "en",
    degrees: "M",
    city: "Orsha",

    curTemp: "",
    wind: "",
    feel: "",
    humidity: "",

    latitude: "",
    longitude: "",
  };

  setGeolocationInfo = (result) => {
    this.setState({
      city: result.city
    })
  }

  setCoordinatesInfo = (res) => {
    this.setState({
      latitude: res.results[0].geometry.lat,
      longitude: res.results[0].geometry.lng
    }) 
  }


  setTime = () => {
    this.setState({
      date: new Date()
    })
  }


  setBackgroundImg = (url) => {
    this.setState({
      backgroundImg: url,
    });
  };


  setRuLang = () => {
    this.setState({
      lang: "ru"
    })
  }
  setEnLang = () => {
    this.setState({
      lang: "en"
    })
  }
  setBeLang = () => {
    this.setState({
      lang: "be"
    })
  }


  setCelcius = () => {
    this.setState({
      degrees: "M"
    })
  }
  setFahrenheit = () => {
    this.setState({
      degrees: "I"
    })
  }


  setWeatherInfo = (res) => {
    this.setState({
      curTemp: res.data[0].temp,
      wind: res.data[0].wind_spd,
      feel: res.data[0].app_max_temp,
      humidity: res.data[0].rh,
    })
  }

  componentDidMount() {
    getLinkToImage().then((data) => {
      this.setBackgroundImg(data)
    });
    this.timerID = setInterval(() => this.setTime(), 1000);
    getWeatherInfo(this.state.city, this.state.degrees, this.state.lang).then((res) => {
      this.setWeatherInfo(res)
    });
    getCoordinatesInfo(this.state.city).then((res) => {
      this.setCoordinatesInfo(res)
    })
    getGeolocationInfo().then((result) => {
      this.setGeolocationInfo(result)
    })
  }

  componentDidUpdate(_, s) {
    if(s.backgroundImg !== this.state.backgroundImg) {
      getLinkToImage().then((data) => {
        this.setBackgroundImg(data)
      })
    };
    if(s.curTemp !== this.state.curTemp) {
      getWeatherInfo(this.state.city, this.state.degrees, this.state.lang).then((res) => {
        this.setWeatherInfo(res)
      })
    };
    if(s.latitude !== this.state.latitude) {
      getCoordinatesInfo(this.state.city).then((res) => {
        this.setCoordinatesInfo(res)
      })
    }
    if(s.city !== this.state.city) {
      getGeolocationInfo().then((result) => {
        this.setGeolocationInfo(result)
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
     return (
    <div className="App" style={{backgroundImage: `url(${this.state.backgroundImg})`}}>
      <ControlBlock 
        setBackgroundImg = {this.setBackgroundImg}
        setRuLang = {this.setRuLang}
        setEnLang = {this.setEnLang}
        setBeLang = {this.setBeLang}
        setCelcius = {this.setCelcius}
        setFahrenheit = {this.setFahrenheit}
      />
      <Weather 
        data = {this.state.date.toLocaleString(`${this.state.lang}`, options)}
        curTemp = {this.state.curTemp}
        feel = {this.state.feel}
        wind = {this.state.wind}
        humidity = {this.state.humidity}
      />
      <Coordinates 
        Latitude = {this.state.latitude}
        Longitude = {this.state.longitude}
      /> 
    </div>
    );
  }
}

export default App;
