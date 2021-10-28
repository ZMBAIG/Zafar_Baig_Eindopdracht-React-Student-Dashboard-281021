import React from "react";
import logo from "./images/winc-logo-01.png";
function Header(props) {
  return (
    <header>
      <div id="logo">
        <img id="winclogo" alt="pic" src={logo} />

        <h1> WINC ACADEMY STUDENT DASHBOARD</h1>
      </div>
    </header>
  );
}

export default Header;
