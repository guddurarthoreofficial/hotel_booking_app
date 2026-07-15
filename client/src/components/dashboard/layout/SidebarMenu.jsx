import { menuConfig } from "../../../config/menuConfig";
import SidebarItem from "./SidebarItem";
import { useAuth } from "../../../context/AuthContext";

const SidebarMenu = ({ setSidebarOpen }) => {

  const { user } = useAuth();

  const role = user?.role || "admin";

  const menus = menuConfig[role] || [];

  return (

    <div className="flex-1 overflow-y-auto px-4 py-6">

      {menus.map((section) => (

        <div
          key={section.section}
          className="mb-8"
        >

          <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-4 px-2">

            {section.section}

          </h3>

          <div className="space-y-2">

            {section.items.map((item) => (

              <SidebarItem
                key={item.path}
                item={item}
                closeSidebar={() => setSidebarOpen(false)}
              />

            ))}

          </div>

        </div>

      ))}

    </div>

  );
};

export default SidebarMenu;