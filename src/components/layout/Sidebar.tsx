import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPathsTo } from '../../routes/admin.routes';
import { facultyPathsTo } from '../../routes/faculty.routes';


const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student"
};

const Sidebar = () => {

    const role = "faculty";

    let sidebarItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPathsTo)
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPathsTo)
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