// public route
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error";
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/contact',
        component: Contact
    },
    ,
    {
        path: '/:error',
        component: Error
    }
]

const privateRoutes = [

]

export {publicRoutes,privateRoutes}