import { Link, Outlet } from "react-router-dom";
import { AiFillCalendar, AiFillHome, AiFillShopping, AiOutlineMenu } from 'react-icons/ai';
import { IoWallet } from 'react-icons/io5';
import { FaShoppingCart } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <Outlet />


                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link><AiFillHome /> User Home</Link></li>
                    <li><Link><AiFillCalendar /> Reservation</Link></li>
                    <li><Link><IoWallet /> Payment History</Link></li>
                    <li><Link><FaShoppingCart /> My Cart</Link></li>
                    <div className="divider"></div>
                    <li ><Link to='/'><AiFillHome /> Home</Link></li>
                    <li ><Link to='/menu'><AiOutlineMenu/> Menu</Link></li>
                    <li ><Link to='/shop/salads'><AiFillShopping/> Shop</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;