import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name, recipe, image, price, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] = useCart();
    const handleAddItem = () => {
        if (user) {
            const cartItem = {menuItemId: _id, name: name, image: image, price: price, email: user.email}
            fetch('http://localhost:5000/carts',{
                method: "POST",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your item has been added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You must login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}});
                }
            })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <p className="absolute right-0 mx-5 my-2 bg-black text-white px-2 py-1">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddItem(item)} className="btn btn-outline bg-slate-100 text-orange-500 border-0 border-b-4 ">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;