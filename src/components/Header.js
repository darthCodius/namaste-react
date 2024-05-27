import { useState } from "react";
import { LOGO_URL as logo } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";
import { getCart } from "../slices/cartSlice";

const navItem =
  " px-2 py-2 transition-all duration-300 rounded-md text-amber-950 hover:bg-amber-200 inline-block focus:ring focus:ring-yellow-300 focus:ring-offset-2";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onlineStatus = useOnlineStatus();

  //Subscribing to store using a selector function
  const cartItems = useSelector(getCart);

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
            <NavLink to="/cart" className={`${navItem} flex gap-1`}>
              <CiShoppingCart data-testid="cart-icon" size={25} />{" "}
              {cartItems.length > 0 ? cartItems.length : ""}
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
