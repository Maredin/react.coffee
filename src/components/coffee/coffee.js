import CoffeeHeader from "./coffee-header/coffee-header";
import Beans from "./beans/beans";

const Coffee = () => {
    return (
        <div className="coffee">
            <CoffeeHeader/>
            <Beans/>
        </div>
    )
}

export default Coffee;