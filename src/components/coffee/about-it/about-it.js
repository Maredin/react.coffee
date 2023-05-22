import "./about-it.css";

import aboutLogo from './img/about-logo.png'
import discrImg from './img/aboutBG.jpg'
const AboutIt = () => {
    return (
        <div className="aboutIt">
            <img src={discrImg} alt="beans" />
            <div className="aboutIt__descr">
                <h2>About our beans</h2>
                <img src={aboutLogo} alt="logo" />
                <div className="aboutIt__descr-item">
                    <p><b>Country:</b> Brasil</p><br />
                    <p><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br />
                    <p>Price:  <b>16.99$</b></p>
                </div>

            </div>
        </div>
    )
}

export default AboutIt;