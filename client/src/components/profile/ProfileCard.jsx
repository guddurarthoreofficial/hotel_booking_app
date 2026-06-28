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

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-36 relative">

                <div className="absolute left-10 top-20">

                    <div className="h-28 w-28 rounded-full bg-white shadow-xl flex items-center justify-center text-4xl font-bold text-blue-600 border-4 border-white">

                        {initials}

                    </div>

                </div>

            </div>

            {/* Body */}

            <div className="pt-20 px-10 pb-10">

                <h2 className="text-3xl font-bold">

                    {user.name}

                </h2>

                <p className="text-gray-500 capitalize">

                    {user.role}

                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-10">

                    <div>

                        <label className="text-gray-500 text-sm">
                            Email
                        </label>

                        <p className="font-semibold mt-1">
                            {user.email}
                        </p>

                    </div>

                    <div>

                        <label className="text-gray-500 text-sm">
                            Phone
                        </label>

                        <p className="font-semibold mt-1">
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

                <div className="flex flex-wrap gap-4 mt-10">

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