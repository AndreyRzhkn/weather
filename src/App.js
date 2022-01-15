import React from "react";
import "./App.css";
import ControlBlock from "./components/ControlBlock";
import Coordinates from "./components/Coordinates";
import Weather from "./components/Weather";
import {
  getLinkToImage,
  getGeolocationInfo,
} from "./api/api.js";



class App extends React.Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this)
  }
  state = {
    backgroundImg: "",
    lang: "en",
    degrees: "Celsium",
    city: "Polotsk",
    colour: "white",
    latitude: "",
    longitude: "",
  };

  setGeolocationInfo = (result) => {
    this.setState({
      city: result.city,
    });
  };

  setBackgroundImg = (url) => {
    this.setState({
      backgroundImg: url,
    });
  };

  setRuLang = () => {
    this.setState({
      lang: "ru",
    });
  };
  setEnLang = () => {
    this.setState({
      lang: "en",
    });
  };
  setBeLang = () => {
    this.setState({
      lang: "be",
    });
  };
  setColourBlack = () => {
    this.setState({
      colour: "black"
    })
  }
  setColourWhite = () => {
    this.setState({
      colour: "white"
    })
  }

  setCelcius = () => {
    this.setState({
      degrees: "Celsium",
    });
  };
  setFahrenheit = () => {
    this.setState({
      degrees: "Farengeit",
    });
  };

  componentDidMount() {
    getLinkToImage().then((data) => {
      this.setBackgroundImg(data);
    });
    
    getGeolocationInfo().then((result) => {
      this.setGeolocationInfo(result);
    });
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.backgroundImg !== this.state.backgroundImg) {
      getLinkToImage().then((data) => {
        this.setBackgroundImg(data);
      });
    }
    // if (prevState.latitude !== this.state.latitude) {
    //   getCoordinatesInfo(this.state.city).then((res) => {
    //     this.setCoordinatesInfo(res);
    //   });
    // }
  }
  focusTextInput = () => {
    this.setState({
      city: this.textInput.current.value
    })
  }

  render() {
    const { lang,
            backgroundImg,
            city,
            degrees,
            colour,
            latitude,
            longitude,
          } = this.state;
          
    return (
      <div
        className="App"
        style={{ backgroundImage: `url(${backgroundImg})`}}
      >
        
        <ControlBlock
          setBackgroundImg={this.setBackgroundImg}
          setRuLang={this.setRuLang}
          setEnLang={this.setEnLang}
          setBeLang={this.setBeLang}
          setCelcius={this.setCelcius}
          setFahrenheit={this.setFahrenheit}
          lang={lang}
          city={city}
          ref={this.textInput}
          focusTextInput={this.focusTextInput}
          setColourBlack={this.setColourBlack}
          setColourWhite={this.setColourWhite}
          colour={colour}
        />
        <div className="info-block">
          <Weather
            lang = {lang}
            city = {city}
            degrees={degrees}
            colour={colour}
          />
          <Coordinates
            lang={lang}
            city={city}
            colour={colour}
          />
        </div>
      </div>
    );
  }
}

export default App;