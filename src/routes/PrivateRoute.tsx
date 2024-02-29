import { Navigate, useLocation } from "react-router-dom"
import { isAuthenticated } from "@/utils/auth";

type PrivateRouteProps = {
    component: JSX.Element;
};

export default function PrivateRoute({ component }: PrivateRouteProps) {
    const location = useLocation();

    if (!isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }

    return component || <Navigate to="/"/>;
}