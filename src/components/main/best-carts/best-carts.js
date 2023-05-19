import "./beast-carts.css";
import img1 from './img/best-cart-1.png'
import img2 from './img/best-cart-2.png'
import img3 from './img/best-cart-3.png'

const BestCarts = () => {
    return (
        <div className="best__carts">
            <div className="best__carts-item">
                <div className="best__carts-popap">
                    <img src={img1} alt="switch" />
                </div>
                <p className="best__carts-discr">Solimo Coffee Beans 2 kg</p>
                <p className="best__carts-price">10.73$</p>
            </div>

            <div className="best__carts-item">
                <div className="best__carts-popap">
                    <img src={img2} alt="switch" />
                </div>
                <p className="best__carts-discr">Presto Coffee Beans 1 kg</p>
                <p className="best__carts-price">15.99$</p>
            </div>

            <div className="best__carts-item">
                <div className="best__carts-popap">
                    <img src={img3} alt="switch" />
                </div>
                <p className="best__carts-discr">AROMISTICO Coffee 1 kg</p>
                <p className="best__carts-price">6.99$</p>
            </div>
        </div>
    )
}

export default BestCarts;