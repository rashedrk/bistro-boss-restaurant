import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    return (
    <>
    <Helmet>
        <title>Bistro Boss | My Cart</title>
    </Helmet>
        <div>
            <div className="uppercase">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total price: {totalPrice}</h3>
                <button className="btn btn-warning btn-sm">buy</button>
            </div>

        </div>
    
    </>
    );
};

export default MyCart;