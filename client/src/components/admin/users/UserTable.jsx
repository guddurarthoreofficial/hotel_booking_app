import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const UserTable = ({
  users = [],
  onView,
  onEdit,
  onDelete,
}) => {
  console.log("UserTable Users:", users);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr className="border-b">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                User
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Phone
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Role
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Joined
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-16 text-center text-slate-500"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b transition hover:bg-slate-50"
                >
                  {/* User */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-white">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {user.name}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Phone */}

                  <td className="px-6 py-5 text-slate-600">
                    {user.phone || "-"}
                  </td>

                  {/* Role */}

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold
                      ${user.role === "admin"
                          ? "bg-red-100 text-red-700"
                          : user.role === "manager"
                            ? "bg-purple-100 text-purple-700"
                            : user.role === "receptionist"
                              ? "bg-indigo-100 text-indigo-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${user.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>

                  {/* Joined */}

                  <td className="px-6 py-5 text-slate-600">
                    {new Date(user.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onView(user)}
                        className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                        title="View User"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        onClick={() => onEdit(user)}
                        className="rounded-lg bg-amber-500 p-2 text-white transition hover:bg-amber-600"
                        title="Edit User"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() => onDelete(user)}
                        className={`rounded-lg p-2 text-white transition ${user.isActive
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-green-600 hover:bg-green-700"
                          }`}
                        title={user.isActive ? "Deactivate User" : "Activate User"}
                      >
                        <Trash2 size={16} />
                      </button>
                      
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable; 