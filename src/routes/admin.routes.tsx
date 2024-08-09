// import { ReactNode } from "react";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemister from "../pages/admin/academicManagement/AcademicSemister";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemister from "../pages/admin/academicManagement/CreateAcademicSemister";
import AdminDashboard from "../pages/admin/userManagement/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
// import { NavLink } from "react-router-dom";
import Profile from "../pages/Profile";

// type TRoute = {
//     path: string,
//     element: ReactNode
// }
// type TSidebar = {
//     key: string,
//     label: ReactNode,
//     children?: []
// }
export const adminPathsTo = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard/>
    },
    {
        name: "Profile",
        path: "profile",
        element: <Profile/>
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "Create A. Semister",
                path: "create-academic-semister",
                element: <CreateAcademicSemister/>
            },
            {
                name: "Academic Semister",
                path: "academic-semister",
                element: <AcademicSemister/>
            },
            {
                name: "Create A. Faculty",
                path: "create-academic-faculty",
                element: <CreateAcademicFaculty/>
            },
            {
                name: "Academic Faculty",
                path: "academic-faculty",
                element: <AcademicFaculty/>
            },
            {
                name: "Create A. Department",
                path: "create-academic-department",
                element: <CreateAcademicDepartment/>
            },
            {
                name: "Academic Department",
                path: "academic-department",
                element: <AcademicDepartment/>
            },

        ]
    },
    {
        name: "User Management",
        children: [
           {
            name: "Create Admin",
            path: "create-admin",
            element: <CreateAdmin/>
           },
           {
            name: "Create Faculty",
            path: "create-faculty",
            element: <CreateFaculty/>
           },
           {
            name: "Create Student",
            path: "create-student",
            element: <CreateStudent/>
           }
        ]
    }
]

// export const adminSidebarItems = adminPathsTo.reduce( (acc : TSidebar[], item) => {
//       if(item.path && item.element){
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//         })
//       }

//       if(item.name && item.children){
//         acc.push({
//             key: item.name,
//             label: item.name,
//             children: item.children.map((child)=> {
//                 return {
//                     key: child.name,
//                     label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//                 }
//             })
//         })
//       }

//       return acc;
// },[])


// programmitical way === this logic move on to the utils/routerGenerator file
// export const adminRoutes = adminPathsTo.reduce( (acc : TRoute[], item) => {
//     console.log({acc})
//     console.log({item})
//     if(item.path && item.element){
//        acc.push({
//         path: item.path,
//         element: item.element
//     })
//     }

//     if(item.name && item.children){
//         item.children.forEach( (child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
    
//     return acc

// },[])


// hard way
//  export const adminPaths = [
//     {
//         path: "dashboard",
//         element: <AdminDashboard/>
//     },
//     {
//         path: "create-student",
//         element: <CreateStudent/>
//     },
//     {
//         path: "create-faculty",
//         element: <CreateFaculty/>
//     },
//     {
//         path: "create-admin",
//         element: <CreateAdmin/>
//     }
// ]