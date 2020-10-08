import React, { useEffect, useState } from "react";
import "./Nav.css";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <div className="nav__icons">
        <SearchIcon className="nav__icon" fontSize="large" />
        <CardGiftcardIcon className="nav__icon" fontSize="large" />
        <NotificationsIcon className="nav__icon" fontSize="large" />
        <img
          className="nav__avatar"
          src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
          alt=""
        />
        <ArrowDropDownIcon className="nav__icon" fontSize="large" />
      </div>

      {/* </div> */}
    </div>
  );
}

export default Navbar;
