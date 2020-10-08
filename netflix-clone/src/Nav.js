import React, { useEffect, useState } from "react";
import "./Nav.css";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

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
      {/* <img
        className="nav__giftbox"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm_exyapndffeMTDqMe9QexEruiMEgMe7Cbg&usqp=CAU"
        alt="gift
        box"
      /> */}
      {/* <div className="nav__icons"> */}
      {/* <CardGiftcardIcon
          clasname="nav__giftcard"
          style={{ color: "white", fontSize: 90 }}
          // fontSize="large"
        /> */}
      <img
        className="nav__avatar"
        src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
        alt=""
      />
      {/* </div> */}
    </div>
  );
}

export default Navbar;
