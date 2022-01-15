import React from "react";
import "./ControlBlock.css";

const ControlBlock = React.forwardRef((props, ref) => {
  const {lang} = props
  const changeTranslation = () => {
    switch (lang) {
      case "en":
        return "Update";
      case "ru":
        return "Обновить";
      default:
        return "Абнавить";
    }
  };
  const changeTranslColourWhite = () => {
    switch(lang) {
      case "en":
        return "White";
      case "ru":
        return "Белый";
      default:
        return "Белы";
    }
  };
  const changeTranslColourBlack = () => {
    switch(lang) {
      case "en":
        return "Black";
      case "ru":
        return "Черный";
      default:
        return "Чорны";
    }
  }
  
  const {
    focusTextInput,
    setBackgroundImg,
    setRuLang,
    setEnLang,
    setBeLang,
    setCelcius,
    setFahrenheit,
    setColourBlack,
    setColourWhite,
    colour,
  } = props;
  return (
    <div className="control-block">
        <div className={colour == "white" ? "control-block-settings-white" : "control-block-settings-black"}>
          <div className="update-img" onClick={() => setBackgroundImg()}>
            {changeTranslation()}
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
        <div className={colour == "white" ? "control-block-color-white" : "control-block-color-black"}>
          <div className="black" onClick={() => setColourBlack()}>
            {changeTranslColourBlack()}
          </div>
          <div className="white" onClick={() => setColourWhite()}>
            {changeTranslColourWhite()}
          </div>
        </div>
        <div className={colour == "white" ? "control-block-input-white" : "control-block-input-black"}>
          <input type="text" ref={ref}/>
          <input
            type="button"
            value="Search"
            onClick={focusTextInput}
          />
        </div>
      </div>
  )
})

// class ControlBlock extends React.Component {
//   constructor(props){
//     super(props)
//     this.textInput = React.createRef();
//     this.focusTextInput = this.focusTextInput.bind(this)
//   }

//   changeTranslation = () => {
//     const {lang} = this.props;
//     switch (lang) {
//       case "en":
//         return "Update";
//       case "ru":
//         return "Обновить";
//       default:
//         return "Абнавить";
//     }
//   };
//   focusTextInput = () => {
//     this.setState({
//       city: this.textInput.current.value
//     })
//   }

//   render() {
//     const {
//       setBackgroundImg,
//       setRuLang,
//       setEnLang,
//       setBeLang,
//       setCelcius,
//       setFahrenheit,
//     } = this.props;
//     return (
//       <div className="control-block">
//         <div className="control-block-settings">
//           <div className="update-img" onClick={() => setBackgroundImg()}>
//             {this.changeTranslation()}
//           </div>
//           <div className="language">
//             <div className="language-point" onClick={() => setEnLang()}>
//               En
//             </div>
//             <div className="language-point" onClick={() => setRuLang()}>
//               Ru
//             </div>
//             <div className="language-point" onClick={() => setBeLang()}>
//               Be
//             </div>
//           </div>
//           <div className="gradus">
//             <div className="gradus-point" onClick={() => setCelcius()}>
//               °C
//             </div>
//             <div className="gradus-point" onClick={() => setFahrenheit()}>
//               °F
//             </div>
//           </div>
//         </div>
//           <div className="control-block-input">
//             <input type="text" ref={this.textInput}/>
//             <input
//               type="button"
//               value="Фокус на текством поле"
//               onClick={this.focusTextInput}
//             />
//           </div>
          
//       </div>
//     );
//   }
// }

export default ControlBlock;