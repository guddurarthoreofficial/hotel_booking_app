import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition
        ${
          sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50

          w-72

          bg-slate-950

          border-r
          border-slate-800

          flex
          flex-col

          transition-transform
          duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        <SidebarHeader />

        <SidebarMenu
          setSidebarOpen={setSidebarOpen}
        />

        <SidebarFooter />

      </aside>

    </>
  );
};

export default Sidebar;