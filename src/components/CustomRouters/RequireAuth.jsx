import {useLocation, Navigate} from "react-router-dom";
import {useAuthContext} from "./AuthProvider";

function RequireAuth({ children, routerConfig }) {
    const { authData } = useAuthContext();
    const location = useLocation();

    if (routerConfig.private && !authData?.authStatus) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;
