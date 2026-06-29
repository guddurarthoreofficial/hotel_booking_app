import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import ChangePasswordModal from "./ChangePasswordModal";

const ProfileCard = ({
    user,
    onProfileUpdated,
}) => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openPassword, setOpenPassword] = useState(false);

    const initials = user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            {/* Header */}

            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 h-52 relative">

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute left-10 bottom-0 translate-y-1/2">

                    <div className="h-36 w-36 rounded-full bg-white shadow-2xl border-[6px] border-white flex items-center justify-center text-5xl font-bold text-blue-700">

                        {initials}

                    </div>

                </div>

            </div>

            {/* Body */}

            <div className="pt-24 px-10 pb-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

                    <div>

                        <h2 className="text-4xl font-bold text-slate-800">
                            {user.name}
                        </h2>

                        <p className="text-gray-500 mt-2">
                            {user.email}
                        </p>

                    </div>

                    <span className="mt-5 lg:mt-0 inline-flex bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold capitalize">

                        {user.role}

                    </span>

                </div>

                <div className="grid lg:grid-cols-2 gap-6 mt-12">

                    <div>

                        <label className="text-gray-500 text-sm">
                            Email
                        </label>

                        <p className="font-semibold mt-1">
                            {user.email}
                        </p>

                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">

                        <label className="text-sm text-gray-500">
                            Phone
                        </label>

                        <p className="font-semibold mt-2 text-lg">
                            {user.phone}
                        </p>

                    </div>
                    <div>

                        <label className="text-gray-500 text-sm">
                            Role
                        </label>

                        <p className="font-semibold mt-1 capitalize">
                            {user.role}
                        </p>

                    </div>

                    <div>

                        <label className="text-gray-500 text-sm">
                            Member Since
                        </label>

                        <p className="font-semibold mt-1">
                            {new Date(user.createdAt).toLocaleDateString()}
                        </p>

                    </div>

                </div>

                <div className="flex flex-wrap gap-5 mt-12 border-t pt-8">

                    <button
                        onClick={() => setOpenEdit(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
                    >
                        Edit Profile
                    </button>

                    <button
                        onClick={() => setOpenPassword(true)}
                        className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-3 rounded-xl font-semibold transition"
                    >
                        Change Password
                    </button>

                </div>

            </div>


            <EditProfileModal
                open={openEdit}
                onClose={() => setOpenEdit(false)}
                user={user}
                onSuccess={onProfileUpdated}
            />

            <ChangePasswordModal
                open={openPassword}
                onClose={() => setOpenPassword(false)}
            />

        </div>
    );


};

export default ProfileCard;