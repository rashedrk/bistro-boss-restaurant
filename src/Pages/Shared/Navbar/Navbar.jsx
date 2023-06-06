import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const [cart] = useCart();
    console.log(cart);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const navOptions = <>
        <li ><Link to='/'>Home</Link></li>
        <li ><Link to='/menu'>Our Menu</Link></li>
        <li ><Link to='/shop/salads'>Our Shop</Link></li>
        <li ><Link to='/secret'>secret</Link></li>
        <li ><Link to='/dashboard/mycart'>
            <button className="btn btn-xs">
                <FaShoppingCart className="text-lg"/>
                <div className="badge badge-secondary">+{cart.length || 0}</div>
            </button>
        </Link>
        </li>



        {
            user ? <>
                <li ><Link to='/'>{user.displayName}</Link></li>
                <li ><button onClick={handleLogout} >LOGOUT</button></li>
            </>
                : <li ><Link to='/login'>Login</Link></li>
        }
    </>


    return (
        <div className="navbar fixed z-10 max-w-screen-2xl uppercase font-bold text-white bg-opacity-40 bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-60 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;