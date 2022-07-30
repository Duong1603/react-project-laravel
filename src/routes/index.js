// public route
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error";
import indexAbout from "../Pages/AboutUs/indexAbout";
import Session from "../Pages/Session/Session";
import IndexBlog from "../Pages/Blog/IndexBlog";
import IndexDetail from "../Pages/DetailBlog/IndexDetail";
import IndexDetailSession from "../Pages/Session/IndexDetailSession";
import ReactBigCalendar from "../Pages/Booking/Booking";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Momo from "../Pages/Momo/Momo";
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
    component: IndexBlog,
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
    path:'/check-out',
    component: CheckOut
  }
  ,
  {
    path:'/momo-payment',
    component: Momo
  }
];

const privateRoutes = [

]

export {publicRoutes,privateRoutes}