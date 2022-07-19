// public route
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error";
import indexAbout from "../Pages/AboutUs/indexAbout";
import Session from "../Pages/Session/Session";
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
    },
    {
        path:'/session',
        component: Session 
    }
]

const privateRoutes = [

]

export {publicRoutes,privateRoutes}