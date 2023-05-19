import './footer.css';
import  logo from "./img/beans-logo.png"
const Footer = () => {
    return(
        <div className="footer">
            <ul>
                <li>Coffee house</li>
                <li>Our coffee</li>
                <li>For your pleasure</li>
            </ul>
            <img src={logo} alt="logo cofe" />
        </div>
    )
}

export default Footer;