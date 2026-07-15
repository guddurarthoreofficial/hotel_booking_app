import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({
    children,
    allowedRoles = [],
}) => {

    const {
        user,
        loading,
        isAuthenticated,
    } = useAuth();


    console.log(user);
    console.log(isAuthenticated);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">

                Loading...

            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(user?.role)
    ) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;