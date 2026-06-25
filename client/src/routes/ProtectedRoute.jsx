import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const {
        user,
        token,
        loading,
        isAuthenticated
    } = useAuth();

    // console.log(user);
    console.log("Token : "+token);
    // console.log(loading);
    console.log("isAuthencated : " + isAuthenticated);



    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;