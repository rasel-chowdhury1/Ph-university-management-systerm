import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPathsTo } from '../../routes/admin.routes';
import { facultyPathsTo } from '../../routes/faculty.routes';
import { useAppSelector } from '../../redux/hook';
import { useCurrentUser } from '../../redux/features/auth/authSlice';
import { studentPathsTo } from '../../routes/student.routes';


const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student"
};

const Sidebar = () => {

    const user = useAppSelector(useCurrentUser)

    let sidebarItems;

    switch (user.role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPathsTo, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPathsTo, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPathsTo, userRole.STUDENT)
            break;
    
        default:
            break;
    }
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div
         style={{
            color: "white", 
            textAlign: "center", 
            height: "4rem", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center"
            }}>
            <h1>Ph UNI</h1>
        </div>
        <Menu
         theme="dark"
         mode="inline" 
         defaultSelectedKeys={['4']} 
         items={sidebarItems} />
      </Sider>
    );
};

export default Sidebar;