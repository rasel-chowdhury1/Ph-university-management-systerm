import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPathsTo } from "./admin.routes";
import { routerGenerator } from "../utils/routerGenerator";
import { studentPathsTo } from "./student.routes";
import PrivateRoute from "../components/layout/PrivateRoute";
import { facultyPathsTo } from "./faculty.routes";
import ChangePassword from "../pages/ChangePassword";
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
        element: <PrivateRoute role="admin"> <App/> </PrivateRoute>,
        children: routerGenerator(adminPathsTo)
    },
    {
        path: "/student",
        element: (<PrivateRoute role="student"> <App/> </PrivateRoute>),
        children: routerGenerator(studentPathsTo)
    },
    {
        path: "/faculty",
        element: <PrivateRoute role="faculty"> <App/> </PrivateRoute>,
        children: routerGenerator(facultyPathsTo)
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/change-password",
        element: <ChangePassword/>
    },
    {
        path: "/register",
        element: <Register/>
    }
])

export default router;