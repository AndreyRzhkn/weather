import React from "react";
import "./ControlBlock.css";

class ControlBlock extends React.Component {
  changeTranslation = () => {
    const { lang } = this.props;
    switch (lang) {
      case "en":
        return "update Pic"; // if (x === 'value1')

      case "ru": // if (x === 'value2')
        return "обновить";
      default:
        return "aбнавить";
    }
  };
  render() {
    const {
      setBackgroundImg,
      setRuLang,
      setEnLang,
      setBeLang,
      setCelcius,
      setFahrenheit,
      lang,
    } = this.props;
    return (
      <div className="control-block">
        <div className="update-img" onClick={() => setBackgroundImg()}>
          {this.changeTranslation()}
        </div>
        <div className="language">
          <div className="language-point" onClick={() => setEnLang()}>
            En
          </div>
          <div className="language-point" onClick={() => setRuLang()}>
            Ru
          </div>
          <div className="language-point" onClick={() => setBeLang()}>
            Be
          </div>
        </div>
        <div className="gradus">
          <div className="gradus-point" onClick={() => setCelcius()}>
            °C
          </div>
          <div className="gradus-point" onClick={() => setFahrenheit()}>
            °F
          </div>
        </div>
      </div>
    );
  }
}

export default ControlBlock;
