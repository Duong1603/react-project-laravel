// public route
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/contact',
        component: Contact
    }
]

const privateRoutes = [

]

export {publicRoutes,privateRoutes}