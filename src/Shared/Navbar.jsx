import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  const navList = (
    <>
      <li className="hover:bg-cyan-300 rounded-full">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-cyan-300 rounded-full">
        <Link to="/products">Products</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-green-50 rounded-full px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
        <div className="justify-center items-center flex">
          <img className="w-10 h-10" src={logo} alt="" />
          <a className=" text-2xl font-bold">SoleMate</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold gap-3 px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" dropdown dropdown-bottom dropdown-end dropdown-hover flex ">
            <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
              <div className=" w-10 rounded-full">
                <img
                  src={user?.photoURL || "https://i.ibb.co/hXqMFH8/noimg.png"}
                  alt=""
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm w-auto items-center dropdown-content z-[1] bg-base-100 rounded-box shadow"
            >
              <li>
                <a className="text-base justify-center font-semibold hover:text-rose-600">
                  {user?.displayName || "N/A"}
                </a>
                <a className="text-base font-semibold hover:text-rose-600">
                  {user?.email || "n/a"}
                </a>
              </li>
              <li>
                <Link
                  to="/login"
                  onClick={logout}
                  className=" text-base font-semibold hover:bg-rose-500 hover:text-white hover:font-bold"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn text-base rounded-full font-semibold bg-cyan-500 hover:bg-cyan-600 hover:text-white hover:font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
