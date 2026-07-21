import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/customer/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/shared/NotFound";
import MyBookings from "../pages/customer/MyBookings";
import ProtectedRoute from "./ProtectedRoute";

import RoomDetails from "../pages/customer/RoomDetails";
import Booking from "../pages/customer/Booking";
import Profile from "../pages/customer/Profile";
import Rooms from "../pages/customer/Rooms";
import About from "../pages/customer/About";
import Contact from "../pages/customer/Contact";



import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/admin/Dashboard";
import RoomsAdmin from "../pages/admin/Rooms";
import BookingsAdmin from "../pages/admin/Bookings";
import UsersAdmin from "../pages/admin/Users";
import Staff from "../pages/admin/Staff";
import Payments from "../pages/admin/Payments";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/rooms/:id"
          element={<RoomDetails />}
        />

        <Route path="/rooms" element={<Rooms />} />



        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/booking/:roomId"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />


        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />


        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="rooms"
            element={<RoomsAdmin />}
          />

          <Route
            path="bookings"
            element={<BookingsAdmin />}
          />

          <Route
            path="users"
            element={<UsersAdmin />}
          />

          <Route
            path="staff"
            element={<Staff />}
          />

          <Route
            path="payments"
            element={<Payments />}
          />

          <Route
            path="reports"
            element={<Reports />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>


        <Route path="*" element={<NotFound />} />


      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;