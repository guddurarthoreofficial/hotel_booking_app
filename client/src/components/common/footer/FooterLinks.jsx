import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Rooms",
    path: "/rooms",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

const FooterLinks = () => {
  return (
    <div>

      <h3 className="text-xl font-bold text-white mb-6">
        Quick Links
      </h3>

      <div className="space-y-4">

        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="block text-gray-400 hover:text-amber-400 transition"
          >
            {link.name}
          </NavLink>
        ))}

      </div>

    </div>
  );
};

export default FooterLinks;