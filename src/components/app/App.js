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
			wrapper: <Main/>
		}
	}

	onMain = () => {
		this.setState({
			wrapper: <Main/>
		})
	}
	onCoffee = () => {
		this.setState({
			wrapper: <Coffee/>
		})
	}
	onPlesure = () => {
		this.setState({
			wrapper: <Plesure/>
		})
	}


	render() {	
		return (
			<div className="App">
				<Navigation 
					onCoffee={this.onCoffee}
					onPlesure={this.onPlesure}
					onMain={this.onMain}
				/>
				
				{this.state.wrapper}
				
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
