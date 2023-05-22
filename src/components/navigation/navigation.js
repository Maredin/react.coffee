import { Component } from "react";
import "./navigation.css";

class Navigation extends Component {
    render() {
        const {onMain, onCoffee, onPlesure} = this.props;
        return (
            <div className="navigation">
            <ul>
                <li onClick={onMain}>Coffee house</li>
                <li onClick={onCoffee}>Our coffee</li>
                <li onClick={onPlesure}>For your pleasure</li>
            </ul>
            </div>
        )
    }
}

export default Navigation;