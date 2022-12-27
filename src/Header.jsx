import "./Header.css";
import {
  Search,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
  Home,
} from "@material-ui/icons";

import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase";
import { logout, selectUser } from "./features/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://www.pngitem.com/pimgs/m/35-351826_linkedin-icon-png-transparent-background-linkedin-logo-png.png"
          alt=""
        />

        <div className="header-search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Networks" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        {user && <HeaderOption avatar title={"me"} onClick={logoutOfApp} />}
      </div>
    </div>
  );
};

export default Header;
