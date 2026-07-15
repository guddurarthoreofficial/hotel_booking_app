import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/dashboard/layout/Sidebar";
import Header from "../components/dashboard/layout/Header";

const DashboardLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div className="min-h-screen bg-slate-100">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="lg:pl-72">

        <Header
          setSidebarOpen={setSidebarOpen}
        />

        <main className="min-h-[calc(100vh-80px)] p-6">

          <Outlet />

        </main>

      </div>

    </div>

  );

};

export default DashboardLayout;