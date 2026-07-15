import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/dashboard/layout/Sidebar";
import Header from "../components/dashboard/layout/Header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Sidebar */}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Right Side */}

      <div className="lg:ml-72 flex flex-col min-h-screen">

        <Header
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-6 lg:p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;