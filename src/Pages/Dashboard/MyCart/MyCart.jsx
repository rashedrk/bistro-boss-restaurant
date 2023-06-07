import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    return (
        <>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div>
                <div className="uppercase h-20 font-semibold flex justify-evenly">
                    <h3 className="text-3xl">Total Items: {cart.length}</h3>
                    <h3 className="text-3xl">Total price: {totalPrice}</h3>
                    <button className="btn btn-warning btn-sm">buy</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item,index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost  bg-red-600 text-white btn-sm"><FaTrashAlt/></button>
                                    </th>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default MyCart;