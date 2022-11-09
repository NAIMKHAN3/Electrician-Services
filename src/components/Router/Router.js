import AddReview from "../AddReview/AddReview";
import AddService from "../AddService/AddService";
import Blog from "../Blog/Blog";
import EditReview from "../EditReview/EditReview";

import LogIn from "../LogIn/LogIn";
import MyReview from "../MyReview/MyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Services from "../Services/Services";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Main/Main");

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>, children: [
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
                path: '/editreview/:id',
                loader: ({ params }) => { return fetch(`https://assignment-11-server-naimkhan3.vercel.app/editreview/${params.id}`) },
                element: <PrivateRoute><EditReview></EditReview></PrivateRoute>
            },
            {
                path: '/addservice', element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services', element: <Services></Services>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/login', element: <LogIn></LogIn>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/addreview/:id',
                loader: ({ params }) => { return fetch(`https://assignment-11-server-naimkhan3.vercel.app/addreview/${params.id}`) },
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => {
                    return fetch(`https://assignment-11-server-naimkhan3.vercel.app/services/${params.id}`)
                },
                element: <ServiceDetails></ServiceDetails>
            }
        ]
    },

])
export default router;