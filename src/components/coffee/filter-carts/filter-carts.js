import "./filter-carts.css";


const Filter = () => {
    return (
        <div className="filter">   
            <div className="filter__carts">
                <p>Or filter</p>
                <div className="filter__carts-btns">
                    <button className="filter__carts-btn">Brazil</button>
                    <button className="filter__carts-btn">Kenya</button>
                    <button className="filter__carts-btn">Columbia</button>
                </div>
            </div>
        </div>
    )
}

export default Filter;