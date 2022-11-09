import AddReview from "../AddReview/AddReview";
import AddService from "../AddService/AddService";
import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import MyReview from "../MyReview/MyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Services from "../Services/Services";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Main/Main");

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/reviews', element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },

            {
                path: '/addservice', element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services', element: <Services></Services>
            },
            {
                path: '/login', element: <LogIn></LogIn>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/addreview/:id',
                loader: ({ params }) => { return fetch(`http://localhost:5000/addreview/${params.id}`) },
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                },
                element: <ServiceDetails></ServiceDetails>
            }
        ]
    },

])
export default router;