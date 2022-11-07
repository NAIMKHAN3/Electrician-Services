import Home from "../Home/Home";
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
                path: '/services', element: <Services></Services>
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