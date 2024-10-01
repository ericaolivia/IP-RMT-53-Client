export default function Navbar() {
  return (
    <>
      <div className="navbar bg-error px-8 flex justify-between">
        <div className="flex">
          <a className="btn text-xl btn-error hover:bg-warning hover:text-black">Sizzle & Stir</a>
        </div>

        <div className="flex justify-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-64"
            />
          </div>
        </div>

        <div className="flex gap-2">
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
                <a className="justify-between text-black hover:text-error">My Favorites</a>
              </li>
              <li>
                <a className="text-black hover:text-error">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
