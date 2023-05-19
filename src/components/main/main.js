import Header from "../header/header"
import About from "./about-us/about-us";
import Best from "./best/best";

const Main = () => {
    return(
        <div className="main">
            <Header/>
            <About/>
            <Best/>
        </div>
    )
}

export default Main;