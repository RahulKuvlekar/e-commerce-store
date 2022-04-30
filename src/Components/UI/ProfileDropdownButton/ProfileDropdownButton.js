import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import useAuthContext from "../../../Hooks/useAuthContext";
import { authFeatures } from "../../../Constants/constants";

const ProfileDropdownButton = () => {
  const { authState, dispatchAuth } = useAuthContext();
  const { isAuthenticated, userInfo } = authState;
  const { CLEAR_AUTH } = authFeatures;
  const navigate = useNavigate();

  const LogoutService = () => {
    dispatchAuth({
      type: CLEAR_AUTH,
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
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Signup</Link>
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
