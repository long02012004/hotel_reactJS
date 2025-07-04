/* Layout */
import { HeaderOnly } from "../components/Layouts/Layout";

/* Page */
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Profile from "../pages/Profile/Profile";
import Contact from "../pages/Contact/Contact";
import Convenient from "../pages/Convenient/Convenient";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Endow from "../pages/Endow/Endow";
import Food from "../pages/Food/Food";
import ViewRoom from "../pages/ViewRoom/ViewRoom"; 
/* chuyển các trang công khai */
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/blog", component: Blog },
  { path: "/profile", component: Profile },
  { path: "/contact", component: Contact },
  { path: "/convenient", component: Convenient },
  { path: "/signup", component: SignUp },
  { path: "/login", component: LogIn },
  { path: "/endow", component: Endow },
  { path: "/food", component: Food },
  { path: "/view-room", component: ViewRoom },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
