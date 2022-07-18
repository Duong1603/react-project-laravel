// public route
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error";
import indexAbout from "../Pages/AboutUs/indexAbout";
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/contact',
        component: Contact
    },
    
    {
        path: '/:error',
        component: Error
    }
    ,
    {
        path: '/about',
        component: indexAbout
    }
]

const privateRoutes = [

]

export {publicRoutes,privateRoutes}