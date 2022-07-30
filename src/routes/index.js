// public route
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error";
import indexAbout from "../Pages/AboutUs/indexAbout";
import Session from "../Pages/Session/Session";
import IndexDetail from "../Pages/DetailBlog/IndexDetail";
import IndexDetailSession from "../Pages/Session/IndexDetailSession";
import ReactBigCalendar from "../Pages/Booking/Booking";
import SearchPage from "../Pages/Blog/SearchPage";

import CheckOut from "../Pages/CheckOut/CheckOut";
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
    component: indexAbout,
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
    path: "/detail-blog",
    component: IndexDetail,
  },
  ,
  {
    path: "/booking/:id",
    component: ReactBigCalendar,
  },
  {

    path: "/search/category/:id",

    component: SearchPage,
  },
  {
    path: "/search/category",

    component: SearchPage,}
    {
    path:'check-out',
    component: CheckOut
  }
];

const privateRoutes = [
]

export { publicRoutes, privateRoutes }