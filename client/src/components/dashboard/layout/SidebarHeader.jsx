import { FaHotel } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const SidebarHeader = () => {

    const { user } = useAuth();

    return (

        <div className="border-b border-slate-800 p-6">

            <div className="flex items-center gap-4">

                <div
                    className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-amber-400
                    flex
                    items-center
                    justify-center
                    shadow-lg
                "
                >

                    <FaHotel className="text-2xl text-black" />

                </div>

                <div>

                    <h2 className="text-white font-bold text-xl">

                        Juhi Petals

                    </h2>

                    <p className="text-slate-400 text-sm">

                        Hotel Management

                    </p>

                    <span
                        className="
                        inline-block
                        mt-2
                        rounded-full
                        bg-amber-400/20
                        text-amber-400
                        text-xs
                        px-3
                        py-1
                        font-medium
                    "
                    >

                        {user?.role?.toUpperCase()}

                    </span>

                </div>

            </div>

        </div>

    );
};

export default SidebarHeader;