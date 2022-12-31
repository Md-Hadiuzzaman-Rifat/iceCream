import React from "react";
import IceCream from "./iceCream/IceCream"
import classes from "./Body.module.css"
import Builder from "./builder//Builder"

const Body = () => {
  return (
    <div className={`${classes.mainBody} react`} id="body">
      <div className="container react" id="iceCreamBuilder">
            <IceCream></IceCream>
            <Builder></Builder>
      </div>
    </div>
  );
};

export default Body;
