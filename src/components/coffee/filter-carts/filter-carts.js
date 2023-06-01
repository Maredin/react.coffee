import { Component } from "react";
import "./filter-carts.css";


class Filter extends Component {

    render() {
        ;
        return (
            <div className="filter">   
                <div className="filter__carts">
                    <p>Or filter</p>
                    <div className="filter__carts-btns">
                        <button className="filter__carts-btn" onClick={ ()=>{this.props.onToggleFilter('Brazil')} }>Brazil</button>
                        <button className="filter__carts-btn" onClick={ ()=>{this.props.onToggleFilter('Kenya')} }>Kenya</button>
                        <button className="filter__carts-btn" onClick={ ()=>{this.props.onToggleFilter('Columbia')} }>Columbia</button>
                        <button className="filter__carts-btn" onClick={ ()=>{this.props.onToggleFilter('All')} }>All</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;