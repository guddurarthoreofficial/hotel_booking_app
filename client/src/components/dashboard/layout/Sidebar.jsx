import { useState } from "react";

import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  collapsed,
}) => {


  const [hovered, setHovered] = useState(false);
  const expanded = !collapsed || hovered;

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition lg:hidden ${sidebarOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible"
          }`}
      />

      {/* Desktop */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`
    hidden
    lg:flex

    h-screen
    shrink-0

    flex-col

    bg-slate-950
    border-r
    border-slate-800

    overflow-hidden

    transition-all
    duration-300
    ease-in-out

    ${expanded ? "w-72" : "w-20"}
  `}
      >

        <SidebarHeader
          collapsed={!expanded}
        />

        <SidebarMenu
          collapsed={!expanded}
          setSidebarOpen={setSidebarOpen}
        />

        <SidebarFooter
          collapsed={!expanded}
        />

      </aside>

      {/* Mobile Drawer */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50

          h-screen
          w-72

          flex
          flex-col

          bg-slate-950
          border-r
          border-slate-800

          transition-transform
          duration-300

          lg:hidden

          ${sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }
        `}
      >

        <SidebarHeader collapsed={false} />

        <SidebarMenu
          collapsed={false}
          setSidebarOpen={setSidebarOpen}
        />

        <SidebarFooter collapsed={false} />

      </aside>
    </>
  );
};

export default Sidebar;