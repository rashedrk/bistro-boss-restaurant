import { Link, NavLink, Outlet } from "react-router-dom";
import { AiFillCalendar, AiFillHome, AiFillShopping, AiOutlineMenu } from 'react-icons/ai';
import { IoWallet } from 'react-icons/io5';
import { FaBook, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    // const [isAdmin] = useAdmin();
    const isAdmin = true
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
                {/* Page content here */}

                <Outlet />


                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><AiFillHome /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaUtensils /> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/payhistory"><IoWallet /> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/payhistory"><FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers /> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/dashboard/home"><AiFillHome /> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><AiFillCalendar /> Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/payhistory"><IoWallet /> Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart /> My Cart <div className="badge badge-secondary">+{cart.length || 0}</div></NavLink></li>
                            
                        </>
                    }
                    <div className="divider"></div>
                            <li ><Link to='/'><AiFillHome /> Home</Link></li>
                            <li ><Link to='/menu'><AiOutlineMenu /> Menu</Link></li>
                            <li ><Link to='/shop/salads'><AiFillShopping /> Shop</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;