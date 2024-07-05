import Profile from "../pages/Profile";
import AdminDashboard from "../pages/admin/AdminDashboard";


export const facultyPathsTo = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard/>
    },
    {
        name: "Profile",
        path: "profile",
        element: <Profile/>
    }
]