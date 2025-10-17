import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "src/components/context/AuthContext";

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    return user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;