import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../store/auth"; // ✅ Import auth context

function Navbar({ onLoginClick }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { isloggedin, LogOutUser } = useAuth(); // ✅ Get login state

  return (
    <nav className="bg-blue-700 px-6 py-3 shadow flex justify-between items-center">
      <h2 className="text-xl font-bold text-[#1A1A40]">SCET Nexus</h2>

      <ul className="flex gap-6 text-gray-700 font-medium items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {!isloggedin && isHome && (
          <li>
            <button
              onClick={onLoginClick}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Login / Signup
            </button>
          </li>
        )}

        {isloggedin && (
          <li>
            <button
              onClick={LogOutUser}
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
