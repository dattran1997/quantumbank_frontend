import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

type PublicRouteProps = {
    component: JSX.Element;
}

// handle login bypass route
export default function PublicRoute({component}: PublicRouteProps) {
    if (isAuthenticated()) {
        return <Navigate to="/home" replace />;
    }
    
    return component || <Navigate to="/" />;
}