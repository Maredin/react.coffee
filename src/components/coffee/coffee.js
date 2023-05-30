import { Component } from "react";
import CoffeeHeader from "./coffee-header/coffee-header";
import Beans from "./beans/beans";
import Filter from "./filter-carts/filter-carts";
import CoffeeCarts from "./carts/carts";
import AboutIt from "./about-it/about-it";


class Coffee extends Component{
    constructor(props) {
        super(props);
        this.state = {
            coffeeClick: true
        }   
    }
    onCoffeeTogle = () => {
		this.setState({
			wrapper: <Coffee 
						coffeeClick={this.state.coffeeClick}
						onCoffeeTogle={this.onCoffeeTogle}/>,
			coffeeClick: false
		})
	}
    render() {
        
        const Wrapper = () => {
            return(this.state.coffeeClick ? <FilterBlock/> : <AboutIt/>)
        }

        const FilterBlock = () => {
            return (
                <>
                    <Beans/>
                    <Filter/>
                    <CoffeeCarts onCoffeeTogle={this.onCoffeeTogle}/>
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