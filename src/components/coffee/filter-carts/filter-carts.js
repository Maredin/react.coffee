import "./filter-carts.css";


const Filter = () => {
    return (
        <div className="filter">   
            <div className="filter__carts">
                <p>Or filter</p>
                <div className="filter__carts-btns">
                    <buttuns className="filter__carts-btn">Brazil</buttuns>
                    <buttuns className="filter__carts-btn">Kenya</buttuns>
                    <buttuns className="filter__carts-btn">Columbia</buttuns>
                </div>
            </div>
        </div>
    )
}

export default Filter;