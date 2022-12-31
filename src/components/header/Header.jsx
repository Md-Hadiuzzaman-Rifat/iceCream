import React from "react";
import classes from "./Header.module.css"
import logo from "../../asssests/images/logo.svg"
import image from "../../asssests/images/react.svg"

const Header = () => {
  return (
      <header>
        <div className="container react" id="header">
          <div>
            <img  src={logo} className={classes.logo} alt="Logo" />
          </div>
          <div className="textRight">
            <img src={image} alt="React" className={classes.reactLogo} />
            <strong>React</strong>
          </div>
        </div>
      </header>
  );
};

export default Header;
