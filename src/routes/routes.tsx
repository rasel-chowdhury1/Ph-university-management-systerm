import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPathsTo } from "./admin.routes";
import { routerGenerator } from "../utils/routerGenerator";
import { studentPathsTo } from "./student.routes";
// import { adminPaths } from "./admin.routes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
    {
        path: "/admin",
        element: <App/>,
        children: routerGenerator(adminPathsTo)
    },
    {
        path: "/student",
        element: <App/>,
        children: routerGenerator(studentPathsTo)
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
])

export default router;