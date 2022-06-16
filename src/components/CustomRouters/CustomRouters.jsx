import React from 'react';
import {Routes, Route} from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import RequireAuth from "./RequireAuth";

const  CustomRouters = ({dataRouters}) => {


    const renderChild = (routesChildren) => {
        return routesChildren.map((route) => {
            const { path, Element } = route
            return route?.children?.length > 0
                ? renderChild()
                : <Route
                    key={path}
                    path={path}
                    element= {
                        <RequireAuth routerConfig={route}>
                                <Element/>
                        </RequireAuth>
                    }
                />

        })
    }

    return (
        <AuthProvider>
            <Routes>
                {
                    dataRouters.map(({ path, Element, children, ...route }) => {
                        return(
                            <Route key={path} path={path} element={<RequireAuth routerConfig={route}><Element/></RequireAuth>}>
                                {children?.length > 0 ? renderChild(children): <></>}
                            </Route>
                        )
                    })
                }
            </Routes>
        </AuthProvider>
    )
}

export default CustomRouters;
