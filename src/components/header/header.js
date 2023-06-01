import "./header.css"

import logo from "./img/cofe-logo.png"

const Header = () => {

    return (
        <div className="header">
            <div className="header__discr">
                <h1>Everything You Love About Coffee</h1>
                <img src={logo} alt="cofe-logo" />
                <p>We makes every day full of energy and taste</p>
                <p>Want to try our beans?</p>
                <button>More</button>
            </div>
        </div>
    )
}

export default Header;