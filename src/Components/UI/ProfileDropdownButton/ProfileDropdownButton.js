import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import useAuthContext from "../../../Hooks/useAuthContext";
import { authFeatures, cartFeatures } from "../../../Constants/constants";
import useCartContext from "../../../Hooks/useCartContext";

const ProfileDropdownButton = () => {
  const {
    authState: { isAuthenticated, userInfo },
    dispatchAuth,
  } = useAuthContext();

  const { CLEAR_AUTH } = authFeatures;

  const { cartDispatch } = useCartContext();
  const { CLEAR_CART_DATA } = cartFeatures;

  const navigate = useNavigate();

  const LogoutService = () => {
    dispatchAuth({
      type: CLEAR_AUTH,
    });

    cartDispatch({
      type: CLEAR_CART_DATA,
    });

    localStorage.removeItem("isAuth");
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");

    navigate("/", { replace: true });
  };

  return (
    <li className="profile-btn-icon list-inline-item">
      <div className="nav-icon-btn">
        <span className="nav-icon">
          <FaUserAlt />
        </span>
        <span className="nav-icon-text">
          Profile <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>

      {/* DROPDOWN  */}
      <ul className="list profile-dropdown">
        {!isAuthenticated && (
          <>
            <li>
              <NavLink
                to={"/login"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <Link
                to={"/signup"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Signup
              </Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <>
            <li>
              <span className="text-grey-dk"> Hi ! {userInfo?.firstName}</span>
            </li>
            <li>
              <button className="btn-logout" onClick={LogoutService}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </li>
  );
};

export default ProfileDropdownButton;
