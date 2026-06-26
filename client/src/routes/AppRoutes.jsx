import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/customer/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/shared/NotFound";
import MyBookings from "../pages/customer/MyBookings";
import ProtectedRoute from "./ProtectedRoute";

import RoomDetails from "../pages/customer/RoomDetails";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/rooms/:id"
          element={<RoomDetails />}
        />



        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />



        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;