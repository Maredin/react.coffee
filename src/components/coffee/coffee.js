import { Component } from "react";
import CoffeeHeader from "./coffee-header/coffee-header";
import Beans from "./beans/beans";
import Filter from "./filter-carts/filter-carts";
import CoffeeCarts from "./carts/carts";
import AboutIt from "./about-it/about-it";


class Coffee extends Component{

    render() {
        const {coffeeClick, onCoffeeTogle} = this.props;
        const Wrapper = () => {
            return(coffeeClick ? <FilterBlock/> : <AboutIt/>)
        }

        const FilterBlock = () => {
            return (
                <>
                    <Beans/>
                    <Filter/>
                    <CoffeeCarts onCoffeeTogle={onCoffeeTogle}/>
                </>
            )
        } 

        return(
            <div className="coffee">
                <CoffeeHeader/>

                <Wrapper/>
            </div>          
        )
    }
}


export default Coffee;