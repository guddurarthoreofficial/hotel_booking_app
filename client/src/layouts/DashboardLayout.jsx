import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/dashboard/layout/Sidebar";
import Header from "../components/dashboard/layout/Header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">

      {/* Desktop Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        collapsed={collapsed}
      />

      {/* Right Panel */}
      <div className="flex flex-1 flex-col overflow-hidden">

        <Header
          setSidebarOpen={setSidebarOpen}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="flex-1 overflow-y-auto p-6">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;