import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>

            },
            {
                path:'/rooms',
                element:<Rooms/>

            },
            {
                path:'/myBookings',
                element:<MyBookings/>

            },
            {
                path:'/login',
                element:<Login/>

            },
            {
                path:'/register',
                element:<Register/>

            },

        ]
    }
])
  


export default router;