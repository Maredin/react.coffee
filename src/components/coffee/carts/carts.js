import { Component } from "react"
import "./carts.css"
import coffeeImg from "./img/coffee.png"


class CoffeeCarts extends Component{
    
    render() {
        const {onCoffeeTogle} = this.props;
        return (

            <div className="coffee__carts">
                <div className="coffee__cart" onClick={onCoffeeTogle}>
                    <div className="coffee__cart-img"><img src={coffeeImg} alt="coffee" /></div>
                    <p className="coffee__cart-discr">AROMISTICO Coffee 1 kg</p>
                    <p className="coffee__cart-country">Brazil</p>
                    <p className="coffee__cart-price">6.99$</p>
                </div>
    
                <div className="coffee__cart">
                    <div className="coffee__cart-img"><img src={coffeeImg} alt="coffee" /></div>
                    <p className="coffee__cart-discr">AROMISTICO Coffee 1 kg</p>
                    <p className="coffee__cart-country">Kenya</p>
                    <p className="coffee__cart-price">6.99$</p>
                </div>
    
                <div className="coffee__cart">
                    <div className="coffee__cart-img"><img src={coffeeImg} alt="coffee" /></div>
                    <p className="coffee__cart-discr">AROMISTICO Coffee 1 kg</p>
                    <p className="coffee__cart-country">Columbia</p>
                    <p className="coffee__cart-price">6.99$</p>
                </div>
    
                <div className="coffee__cart">
                    <div className="coffee__cart-img"><img src={coffeeImg} alt="coffee" /></div>
                    <p className="coffee__cart-discr">AROMISTICO Coffee 1 kg</p>
                    <p className="coffee__cart-country">Brazil</p>
                    <p className="coffee__cart-price">6.99$</p>
                </div>
    
                <div className="coffee__cart">
                    <div className="coffee__cart-img"><img src={coffeeImg} alt="coffee" /></div>
                    <p className="coffee__cart-discr">AROMISTICO Coffee 1 kg</p>
                    <p className="coffee__cart-country">Brazil</p>
                    <p className="coffee__cart-price">6.99$</p>
                </div>
    
                <div className="coffee__cart">
                    <div className="coffee__cart-img"><img src={coffeeImg} alt="coffee" /></div>
                    <p className="coffee__cart-discr">AROMISTICO Coffee 1 kg</p>
                    <p className="coffee__cart-country">Brazil</p>
                    <p className="coffee__cart-price">6.99$</p>
                </div>
            </div>
        )
    }
}

export default CoffeeCarts;