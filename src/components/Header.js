import { useState } from "react";
import { LOGO_URL as logo } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const navItem =
  "bg-amber-200 px-3 py-3 transition-all duration-300 rounded-lg text-amber-950 hover:bg-amber-100 hover:-translate-y-2 hover:scale-110 inline-block focus:ring focus:ring-yellow-300 focus:ring-offset-2";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onlineStatus = useOnlineStatus();

  const handleLogin = () => {
    setIsLogin((curr) => !curr);
  };

  return (
    <div className="flex items-center justify-between shadow-lg">
      <div className="w-24">
        <img className="" src={logo} />
      </div>

      <div className="flex">
        <ul className="flex gap-3 lg:gap-6">
          <li className="text-xs self-center lg:text-lg">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li>
            <NavLink className={navItem} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navItem}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navItem}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/grocery" className={navItem}>
              Grocery
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={navItem}>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink className={`${navItem} mr-3`} onClick={handleLogin}>
              {!isLogin ? "Login" : "Logout"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
