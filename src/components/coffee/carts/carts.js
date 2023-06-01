import "./carts.css"

const CoffeeCarts = ({data, onCoffeeTogle}) => {
        const element = data.map(item => {
            const {id, ...itemProps} = item;
            return (
                <div className="coffee__cart" onClick={onCoffeeTogle} key={id} {...itemProps}>
                    <div className="coffee__cart-img"><img src={item.img} alt="coffee" /></div>
                    <p className="coffee__cart-discr">{item.brend}</p>
                    <p className="coffee__cart-country">{item.country}</p>
                    <p className="coffee__cart-price">{item.price}</p>
                </div>
            )

        })
        
        return (

            <div className="coffee__carts">
                {element}
            </div>
        )
    }


export default CoffeeCarts;