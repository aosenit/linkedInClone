import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser);
  const [logout, setLogout] = useState(false);

  return (
    <div className="headerOption">
      <>
        {" "}
        {Icon && <Icon className="headerOption-icon" />}
        {avatar && (
          <Avatar className="headerOption-icon" src={user?.photoUrl}>
            {user?.displayName && user.displayName.toUpperCase().slice(0, 1)}
          </Avatar>
        )}
        <h3 className="headerOption-title">
          {title}
          {title === "me" && (
            <ArrowDropDown onClick={() => setLogout((prev) => !prev)} />
          )}
        </h3>
      </>
      {logout && title === "me" && (
        <div
          className="logout"
          onClick={() => {
            onClick();
            setLogout(false);
          }}
        >
          <h6>logout</h6>
        </div>
      )}
    </div>
  );
};

export default HeaderOption;
