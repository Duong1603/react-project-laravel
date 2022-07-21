// public route
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error";
import indexAbout from "../Pages/AboutUs/indexAbout";
import Session from "../Pages/Session/Session";
import IndexBlog from "../Pages/Blog/IndexBlog";
import IndexDetail from "../Pages/DetailBlog/IndexDetail";
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
    path: "/blogs",
    component: IndexBlog,
  },
  {
    path: "/detail-blog",
    component: IndexDetail,
  },
];

const privateRoutes = [

]

export {publicRoutes,privateRoutes}