import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const UserTable = ({ users = [] }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="border-b bg-slate-50">

            <tr>

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
                  colSpan="6"
                  className="py-20 text-center text-slate-500"
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

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-lg font-bold text-slate-900">

                        {user.name?.charAt(0).toUpperCase()}

                      </div>

                      <div>

                        <h4 className="font-semibold text-slate-800">

                          {user.name}

                        </h4>

                        <p className="text-sm text-slate-500">

                          {user.email}

                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Phone */}

                  <td className="px-6 py-5">

                    {user.phone || "-"}

                  </td>

                  {/* Role */}

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold
                      ${
                        user.role === "admin"
                          ? "bg-red-100 text-red-700"
                          : user.role === "staff"
                          ? "bg-violet-100 text-violet-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role}
                    </span>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold
                      ${
                        user.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </span>

                  </td>

                  {/* Joined */}

                  <td className="px-6 py-5 text-slate-600">

                    {new Date(
                      user.createdAt
                    ).toLocaleDateString()}

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex items-center justify-center gap-2">

                      <button
                        className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        className="rounded-lg bg-amber-500 p-2 text-white transition hover:bg-amber-600"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-700"
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