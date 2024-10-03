import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot.jsx";
import { useDispatch } from "react-redux";
import { setUser } from "../app/slices/userSlice";

export default function Navbar() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const fetchUserProfile = async () => {
    const userProfile = await getUserProfileFromAPI();
    dispatch(setUser({ imageUrl: userProfile.imageUrl }));
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    nav("/login");
  };
  return (
    <>
      <div className="navbar bg-error px-8 flex justify-between">
        <div className="flex">
          <Link
            to="/"
            className="btn text-xl btn-error hover:bg-warning hover:text-black"
          >
            Sizzle & Stir
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          <Link
            to="/chatbot"
            className="btn text-xl btn-error hover:bg-warning hover:text-black"
          >
            Ask Recipe
          </Link>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to="/profile"
                  className="justify-between text-black hover:text-error"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="justify-between text-black hover:text-error"
                >
                  My Favorites
                </Link>
              </li>
              <li>
                <a
                  className="text-black hover:text-error"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
