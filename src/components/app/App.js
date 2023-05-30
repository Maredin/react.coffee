import { Component } from 'react';

import Navigation from '../navigation/navigation';

import Main from '../main/main';
import Coffee from '../coffee/coffee';
import Plesure from '../plesure/plesure';

import Footer from '../footer/footer';

import './App.css';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wrapper: <Main/>,
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
	onMain = () => {
		this.setState({
			wrapper: <Main/>
		})
	}
	onCoffee = () => {
		this.setState({
			wrapper: <Coffee coffeeClick={this.state.coffeeClick} onCoffeeTogle={this.onCoffeeTogle}/>,
			coffeeClick: true
		})
	}
	onPlesure = () => {
		this.setState({
			wrapper: <Plesure/>
		})
	}


	render() {	
		const Main= () => {
			return(
				<>
				{this.state.wrapper}
				</>
			)
		}
		return (
			<div className="App">
				<Navigation 
					onCoffee={this.onCoffee}
					onPlesure={this.onPlesure}
					onMain={this.onMain}
				/>
				
				<Main/>
				
				<Footer
					onCoffee={this.onCoffee}
					onPlesure={this.onPlesure}
					onMain={this.onMain} 
				/>
			</div>
		);
	}
}

export default App;
