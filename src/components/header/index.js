import React from "react";
import "./Header.css";
//? material import
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, IconButton } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="gmail-icon"
        />
      </div>
      <div className="header_middle">
          <SearchIcon />
          <input type="text" placeholder="search mail" />
          <ArrowDropDown className="header_inputCaret" />
      </div>
      <div className="header_right">
          <IconButton>
              <AppsIcon />
          </IconButton>
          <IconButton>
              <NotificationsIcon />
          </IconButton>
          <Avatar />
      </div>
    </div>
  );
};

export default Header;
