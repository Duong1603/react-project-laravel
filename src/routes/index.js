// public route
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
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
        path: '/about',
        component: indexAbout
    }
]

const privateRoutes = [

]

export {publicRoutes,privateRoutes}