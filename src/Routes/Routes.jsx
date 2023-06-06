import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from '../Pages/Menu/Menu/Menu';
import Shop from "../Pages/Shop/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path: 'menu',
                element: <Menu/>
            },
            {
                path: 'shop/:category',
                element: <Shop/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <Register/>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret/></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children : [
            {
                path : 'mycart',
                element : <MyCart/>
            }
        ]
    }
]);