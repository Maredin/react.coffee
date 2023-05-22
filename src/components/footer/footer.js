import { Component } from 'react';
import './footer.css';
import  logo from "./img/beans-logo.png"
class Footer extends Component {
    render() {
        const {onMain, onCoffee, onPlesure} = this.props;
        return(
            <div className="footer">
                <ul>
                    <li onClick={onMain}>Coffee house</li>
                    <li onClick={onCoffee}>Our coffee</li>
                    <li onClick={onPlesure}>For your pleasure</li>
                </ul>
                <img src={logo} alt="logo cofe" />
            </div>
        )
    }
}

export default Footer;