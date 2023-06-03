import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const loginPage = location.pathname.includes('login')
    return (
        <div>
            {loginPage || <Navbar/>}
            <Outlet/>
            {loginPage || <Footer/>}
        </div>
    );
};

export default Main;