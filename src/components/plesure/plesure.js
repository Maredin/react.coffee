import PlesureHeader from "./plesure-header/plesure-header";
import PlesureDescr from "./plesure-descr/plesure-descr";
import CoffeeCarts from "../coffee/carts/carts";



const Plesure = () => {
    return (
        <div className="coffee">
            <PlesureHeader/>
            <PlesureDescr/>
            <CoffeeCarts/>
        </div>
    )
}

export default Plesure;