import React from "react";
import './ControlBlock.css';

class ControlBlock extends React.Component {
    render() {
        const { setBackgroundImg, setRuLang, setEnLang, setBeLang, setCelcius, setFahrenheit } = this.props
        return (
            <div className="control-block">
                <div className="update-img" onClick={() => setBackgroundImg()}>
                    Update Pic
                </div>
                <div className="language">
                    <div className="language-point" onClick={() => setEnLang()}>En</div>
                    <div className="language-point" onClick={() => setRuLang()}>Ru</div>
                    <div className="language-point" onClick={() => setBeLang()}>Be</div>
                </div>
                <div className="gradus">
                    <div className="gradus-point" onClick={() => setCelcius()}>°C</div>
                    <div className="gradus-point" onClick={() => setFahrenheit()}>°F</div>
                </div>
            </div>
        )
    }
}

export default ControlBlock