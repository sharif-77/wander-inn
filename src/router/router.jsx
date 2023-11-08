import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Login from "./../Pages/Login/Login";
import Register from "./../Pages/Register/Register";
import PrivetRoute from "./../PrivetRoute/PrivetRoute";
import Error from "../Pages/Error/Error";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/myBookings",
        element: (
          <PrivetRoute>
            <MyBookings />
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: `/roomDetails/:id`,
        element: (
          <PrivetRoute>
            <RoomDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://wander-inn-server.vercel.app/room/${params.id}`),
      },
    ],
  },
]);

export default router;
