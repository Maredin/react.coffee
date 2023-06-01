import { Component } from "react";
import CoffeeHeader from "./coffee-header/coffee-header";
import Beans from "./beans/beans";
import Filter from "./filter-carts/filter-carts";
import CoffeeCarts from "./carts/carts";
import AboutIt from "./about-it/about-it";

import coffeeImg from "./carts/img/coffee.png"

class Coffee extends Component{
    constructor(props) {
        super(props);
        this.state = {
            coffeeClick: true,
            data: [
                {img: `${coffeeImg}`, brend: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 1},
                {img: `${coffeeImg}`, brend: 'ARABICA Coffee 1 kg', country: 'Kenya', price: '6.99$', id: 2},
                {img: `${coffeeImg}`, brend: 'BRONTO Coffee 1 kg', country: 'Columbia', price: '6.99$', id: 3},
                {img: `${coffeeImg}`, brend: 'PAULING Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 4},
                {img: `${coffeeImg}`, brend: 'NESCAFFE Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 5},
                {img: `${coffeeImg}`, brend: 'JARDIN Coffee 1 kg', country: 'Kenya', price: '6.99$', id: 6}
            ],
			filter: 'all'
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
    filterPost = (items, filter) => {
		switch(filter) {
			case 'Brazil':
				return items.filter(item => item.country === 'Brazil');
			case 'Kenya':
					return items.filter(item => item.country === 'Kenya');
			case 'Columbia':
				return items.filter(item => item.country === 'Columbia');
			default:
				return items;
		}
	}
    onFilterSelect = () => {
        this.setState({
			filter: 'all'
		});
    }
	onToggleFilter = (newState) => {
		this.setState({
			filter: newState
		});
	}
    
    render() {
        const {data, filter} = this.state
        const Wrapper = () => {
            return(this.state.coffeeClick ? <FilterBlock/> : <AboutIt/>)
        }
        const visibleData = this.filterPost(data, filter)
        
        const FilterBlock = () => { 
            return (
                <>
                    <Beans/>
                    <Filter onToggleFilter={this.onToggleFilter}/>
                    <CoffeeCarts onCoffeeTogle={this.onCoffeeTogle} data={visibleData}/>
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