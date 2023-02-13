
import home from "./pages/home";
import following from "./pages/following";
import upload from "./pages/upload";
import profile from "./pages/profile";
import search from "./pages/search";
import { HeaderOnly} from "./components/layouts/index";

const privateRoutes = [
{path : "/", component: home },
{path : "/following", component: following },
{path : "/profile", component: profile },
{path : "/search", component: profile },
{path : "/upload", component: upload, layout: HeaderOnly },
]
const publicRoutes = []

export {privateRoutes,publicRoutes}
