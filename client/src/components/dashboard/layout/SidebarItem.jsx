import { NavLink } from "react-router-dom";

const SidebarItem = ({
    item,
    closeSidebar,
    collapsed,
}) => {

    const Icon = item.icon;

    return (

        <NavLink
            to={item.path}
            onClick={closeSidebar}
            className={({ isActive }) =>
                `group flex items-center
${collapsed ? "justify-center" : "gap-4"}  rounded-xl px-4 py-3 transition-all duration-300

        ${isActive
                    ? "bg-amber-400 text-black shadow-md"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
            }
        >

            <Icon className="text-lg" />

            {
                !collapsed && (

                    <span
                        className="
                font-medium
                whitespace-nowrap
            "
                    >
                        {item.title}
                    </span>

                )
            }

        </NavLink>

    );
};

export default SidebarItem;