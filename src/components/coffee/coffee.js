import CoffeeHeader from "./coffee-header/coffee-header";
import Beans from "./beans/beans";
import Filter from "./filter-carts/filter-carts";
import CoffeeCarts from "./carts/carts";
import AboutIt from "./about-it/about-it";

const FilterBlock = () => {
    return(
        <>
            <Beans/>
            <Filter/>
            <CoffeeCarts/>
        </>
    )
}

const Coffee = () => {
    return (
        <div className="coffee">
            <CoffeeHeader/>
            
            <FilterBlock/>
        </div>
    )
}

export default Coffee;