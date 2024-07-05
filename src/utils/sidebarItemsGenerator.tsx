
import { NavLink } from "react-router-dom";
import { TSidebar, TUserPath } from "../types";



export const sidebarItemsGenerator = (item : TUserPath[]) => {
    const sidebarItems = item.reduce( (acc : TSidebar[], item) => {
        if(item.path && item.element){
          acc.push({
              key: item.name,
              label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
          })
        }
  
        if(item.name && item.children){
          acc.push({
              key: item.name,
              label: item.name,
              children: item.children.map((child)=> {
                  return {
                      key: child.name,
                      label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
                  }
              })
          })
        }
  
        return acc;
  },[])

  return sidebarItems;
}