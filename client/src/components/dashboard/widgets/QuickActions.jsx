import {
    FaPlus,
    FaBed,
    FaUserPlus,
    FaFileInvoice,
    FaSignInAlt,
    FaSignOutAlt,
} from "react-icons/fa";

const actions = [
    {
        title: "New Booking",
        icon: <FaPlus />,
        color: "bg-blue-600",
    },
    {
        title: "Add Room",
        icon: <FaBed />,
        color: "bg-emerald-600",
    },
    {
        title: "Add Staff",
        icon: <FaUserPlus />,
        color: "bg-violet-600",
    },
    {
        title: "Generate Invoice",
        icon: <FaFileInvoice />,
        color: "bg-amber-500",
    },
    {
        title: "Check In",
        icon: <FaSignInAlt />,
        color: "bg-sky-600",
    },
    {
        title: "Check Out",
        icon: <FaSignOutAlt />,
        color: "bg-rose-600",
    },
];

const QuickActions = () => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800">Quick Actions</h2>

            <p className="mt-1 text-sm text-slate-500">Frequently used actions</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
                {actions.map((action) => (
                    <button
                        key={action.title}
                        className="group flex items-center rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${action.color}`}
                            >
                                {action.icon}
                            </div>

                            <div className="text-left">
                                <p className="font-semibold text-slate-800">{action.title}</p>

                                <p className="text-xs text-slate-500">Click to continue</p>
                            </div>
                        </div>
                    </button>
                ))} 
            </div>
        </div>
    );
};

export default QuickActions;
