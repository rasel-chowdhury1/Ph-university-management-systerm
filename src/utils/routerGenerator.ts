
import { TRoute, TUserPath } from "../types"



export const routerGenerator = (items: TUserPath[]) => {
    const routes = items.reduce( (acc : TRoute[], item) => {
        console.log({acc})
        console.log({item})
        if(item.path && item.element){
           acc.push({
            path: item.path,
            element: item.element
        })
        }
    
        if(item.name && item.children){
            item.children.forEach( (child) => {
                acc.push({
                    path: child.path!, // this ! colon means i am sure this path not come undefinded
                    element: child.element
                })
            })
        }
        
        return acc
    },[])

    return routes;
}