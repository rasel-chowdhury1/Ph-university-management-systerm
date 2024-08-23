import React, { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { logout, useCurrentToken, useCurrentUser } from '../../redux/features/auth/authSlice';
import { Navigate } from 'react-router-dom';
import { tokenVerify } from '../../utils/tokenVerify';


type TPrivateRoute = {
    children: ReactNode,
    role:  string | undefined
}
const PrivateRoute = ( { children, role }: TPrivateRoute) => {
    const token = useAppSelector(useCurrentToken)
    
    let user;
    if(token){
        user = tokenVerify(token)
    }

    console.log({user})

    const dispatch = useAppDispatch();

    if(role !== undefined && role !== user?.role){
        dispatch(logout())
        return <Navigate to="/login" replace={true}/>
    }

    if(!token){
        return <Navigate to="/login" replace={true}/>
    }
    return children;
};

export default PrivateRoute;