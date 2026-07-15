import {
    createContext,
    useContext,
    useState,
} from "react";

import {
    loginUser,
    registerUser,
} from "../services/authService";

import { useEffect } from "react";
import { getProfile } from "../services/userService";

import {
    saveToken,
    getToken,
    removeToken,
} from "../utils/token";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [token, setToken] = useState(() => getToken());

    const [loading, setLoading] = useState(true);
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
                user: data.user,
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


    const register = async (formData) => {
        try {
            setLoading(true);

            const data = await registerUser(formData);

            setUser(data.user);
            setToken(data.token);

            saveToken(data.token);

            return {
                success: true,
                message: data.message,
                user: data.user,
            };
        } catch (error) {
            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    "Registration Failed",
            };
        } finally {
            setLoading(false);
        }
    };


    const fetchProfile = async () => {
        try {

            if (!token) {
                setLoading(false);
                return;
            }

            const data = await getProfile();

            setUser(data.user);

        } catch (error) {

            console.log(error);

            logout();

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {

        if (token) {

            fetchProfile();

        } else {

            setLoading(false);

        }

    }, [token]);

    const logout = () => {
        setUser(null);
        setToken(null);

        removeToken();
    };





    return (
        <AuthContext.Provider
            value={{
                user,
                role: user?.role,

                token,

                loading,

                isAuthenticated,

                login,

                register,

                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};


