// public route
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Session from "../Pages/Session/Session";
import IndexDetail from "../Pages/DetailBlog/IndexDetail";
import IndexDetailSession from "../Pages/Session/IndexDetailSession";
import Booking from "../Pages/Booking/Booking";
import SearchPage from "../Pages/Blog/SearchPage";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Momo from "../Pages/Momo/Momo";
import Error from '../Pages/Error'
import AboutUs from "../Pages/AboutUs/AboutUs";
const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/contact",
        component: Contact,
    },

    {
        path: "/:error",
        component: Error,
    },
    {
        path: "/about",
        component: AboutUs,
    },
    {
        path: "/session",
        component: Session,
    },
    {
        path: "/session/:id",
        component: IndexDetailSession,
    },
    {
        path: "/blogs",
        component: SearchPage,
    },
    {
        path: "/blogs/:id",
        component: IndexDetail,
    },
    ,
    {
        path: "/booking/:id",
        component: Booking,
    },
    {
        path: "/search/category/:id",

        component: SearchPage,
    },
    {
        path: "/search/category",

        component: SearchPage,
    },
    {
        path: "/check-out",
        component: CheckOut,
    },
    {
        path: "/momo-payment",
        component: Momo,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
