import { createContext, useContext, useState } from "react";
import { loginUser } from "../services/authService";
import {
    saveToken,
    removeToken,
} from "../utils/token";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const isAuthenticated = !!token;
    const login = async (formData) => {
        try {
            setLoading(true);

            const data = await loginUser(formData);

            setUser(data.user);
            setToken(data.token);

            saveToken(data.token);

            return {
                success: true,
                message: data.message,
            };
        } catch (error) {
            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    "Login Failed",
            };
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);

        removeToken();
    };
    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                isAuthenticated,

                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};